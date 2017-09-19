(ns sirhaxalot.scraper
  (:require [webica.core :as w]
            [clojure.string :as string]
            [clojure.tools.logging :as log]
            [webica.by :as by]
            [webica.web-driver :as driver]
            [webica.chrome-driver :as chrome]
            [webica.web-element :as element]
            [webica.web-driver-wait :as wait]
            [webica.remote-web-driver :as browser]))

(defn init []
  (chrome/start-chrome))

(defn scrape [{:keys [url query]}]
  (browser/get url)
  (let [q (browser/find-element (by/id "identifierId"))]
    (element/send-keys q query)
    (element/submit q)
    (wait/until (wait/instance 10)
      (wait/condition
        (fn [driver]
          (string/starts-with?
            (string/lower-case (driver/get-title driver))
            (string/lower-case query)))))
    (log/info "Googled that for you ...")
    (w/sleep 10)))
