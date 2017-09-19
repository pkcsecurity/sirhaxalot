(ns sirhaxalot.scraper
  (:refer-clojure :exclude [next])
  (:import [org.openqa.selenium OutputType])
  (:require [webica.core :as w]
            [clojure.string :as string]
            [clojure.tools.logging :as log]
            [webica.by :as by]
            [webica.web-driver :as driver]
            [webica.chrome-driver :as chrome]
            [webica.web-element :as element]
            [webica.web-driver-wait :as wait]
            [webica.remote-web-driver :as browser]
            [clojure.java.io :refer [file output-stream]]))

(defn sel->elem [s]
  (browser/find-element (by/css-selector s)))

(defn kill []
  (chrome/quit))

(defn wait [s max-secs on-element]
  (wait/until (wait/instance max-secs)
              (wait/condition
                (fn [_] (sel->elem s))))
  (Thread/sleep 1500)
  (on-element (sel->elem s)))

(def opt-out-sel "#uxOptInLink")
(def username-sel "input[type=email]")
(def next-sel "input[type=submit]")
(def password-sel "input[type=password]")
(def twofa-sel "#idTxtBx_SAOTCC_OTC")

(defn init []
  (chrome/start-chrome "/usr/local/bin/chromedriver"
                       "headless"
                       "--disable-gpu"))

(defn take-screenshot []
  (with-open [out (output-stream (file (str (System/currentTimeMillis) ".png")))] 
    (.write out (.getScreenshotAs (browser/get-instance) OutputType/BYTES))))

(defn microsoft-login [username-text password-text twofa-text]
  (try
    (browser/get "https://login.microsoftonline.com")
    (wait opt-out-sel 1 element/click)
    (wait username-sel 3 #(element/send-keys % username-text))
    (wait next-sel 1 element/click)
    (wait password-sel 3 #(element/send-keys % password-text))
    (wait next-sel 1 element/click)
    (Thread/sleep 1500)
    (wait twofa-sel 5 #(element/send-keys % twofa-text))
    (wait next-sel 1 element/click)
    (wait/until (wait/instance 10000)
                (wait/condition
                  (fn [driver]
                    (not (.contains (chrome/get-title) "Sign in to your account")))))
    (take-screenshot)
    (catch Exception e
      (binding [*out* *err*]
        (println e)))
    (finally 
      (kill)
      (init))))
