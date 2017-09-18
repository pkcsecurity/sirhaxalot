(ns sirhaxalot.scraper
  (:require [webica.core :as w]
            [webica.by :as by]
            [webica.web-driver :as driver]
            [webica.chrome-driver :as chrome]
            [webica.web-element :as element]
            [webica.web-driver-wait :as wait]
            [webica.remote-web-driver :as browser]))

(defn init []
  (chrome/start-chrome))

(defn scrape [url]
  (print url)
  (browser/get "https://www.google.com")
  (let [q (browser/find-element (by/name "q"))]
    url))
