(ns sirhaxalot.login
  (:require [cheshire.core :as cheshire]
            [sirhaxalot.scraper :as s]
            [sirhaxalot.utils :as utils]))

(defn handler [req]
  (let [{:keys [body url username password] :as req} req]
    (s/scrape url)))
