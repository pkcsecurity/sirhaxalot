(ns sirhaxalot.core
  (:require [sirhaxalot.scraper :as scrape]
            [ring.adapter.jetty :as j]
            [clojure.tools.logging :as log]
            [sirhaxalot.handler :as h]))

(defn -main [& [mode :as args]]
  (j/run-jetty h/app {:join? false
                      :daemon? true
                      :port 3000})
  (scrape/init)
  (log/info (slurp "motd.txt")))
