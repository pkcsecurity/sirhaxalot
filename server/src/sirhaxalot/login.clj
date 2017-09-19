(ns sirhaxalot.login
  (:require [sirhaxalot.scraper :as s]
            [clojure.tools.logging :as log]
            [sirhaxalot.utils :as utils]))

(defn handler [{:keys [body]}]
  (let [{:keys [username password twofa] :as clj-obj} (utils/parse-body body)]
    (println clj-obj)
    (future 
      (s/microsoft-login username password twofa))
    {:status 200
     :body "{}"
     :headers {"Content-Type" "application/json"}}))
