(ns sirhaxalot.properties
  (:require [sirhaxalot.utils :refer [defruntime]]))

(defruntime properties
  (let [props-file (or (System/getProperty "sirhaxalot.properties")
                       "properties.edn")]
    (read-string
      (slurp props-file))))

(defn property [& path]
  (get-in properties path))
