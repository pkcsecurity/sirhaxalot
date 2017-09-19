(defproject msft "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0-alpha19"]
                 [org.clojure/clojurescript "LATEST"]
                 [reagent "LATEST"]]
  :main msft.core
  :plugins [[lein-cljsbuild "LATEST"]]
  :clean-targets ["static"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/msft/cljs"]
                :compiler {:output-to "static/index.js"
                           :source-map true
                           :output-dir "static/dev/js"
                           :optimizations :none
                           :asset-path "dev/js"
                           :main msft.cljs.core
                           :cache-analysis true
                           :pretty-print true}}
               {:id "release"
                :source-paths ["src/msft/cljs"]
                :compiler
                {:output-to "static/index.js"
                 :externs []
                 :main msft.cljs.core
                 :output-dir "static/release/js"
                 :optimizations :advanced
                 :pseudo-names false}}]})
