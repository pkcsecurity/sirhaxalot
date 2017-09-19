(ns sirhaxalot.login
  (:require [cheshire.core :as cheshire]
            [sirhaxalot.scraper :as s]
            [clojure.tools.logging :as log]
            [sirhaxalot.utils :as utils]))

(defn handler [req]
  (log/info req)
  (let [{:keys [url username query password]} (utils/json->clj (slurp (:body req)))]
    (s/scrape {:url url
               :query query})))
