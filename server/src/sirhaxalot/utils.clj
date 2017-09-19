(ns sirhaxalot.utils
  (:require [cheshire.core :as json]))

(defn clj->json [clj-obj]
  (json/generate-string clj-obj))

(defn json->clj [json-str]
  (json/parse-string json-str true))

; We do the *compile-files* check, since we don't want things to be 
; to be AOT'd. Thanks Serenova!
(defmacro defruntime [sym & body]
  `(defonce ~sym
     (when-not *compile-files*
       ~@body)))

(defn parse-body [body]
  (json/parse-string (slurp body) true))

