(defproject sirhaxalot "0.1.0-SNAPSHOT"
  :description "An Automated Spearfishing tool for users with 2fa enabled"
  :url "http://sirhaxalot.com"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/tools.logging "LATEST"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "LATEST"]
                 [ring/ring-core "LATEST"]
                 [ring-cors "LATEST"]
                 [ring/ring-jetty-adapter "LATEST"]
                 [ring/ring-defaults "0.2.1"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler sirhaxalot.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [cheshire "LATEST"]
                        [webica "LATEST"]
                        [ring/ring-mock "0.3.0"]]}}
  :main sirhaxalot.core)
