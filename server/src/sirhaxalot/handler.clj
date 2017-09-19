(ns sirhaxalot.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [sirhaxalot.login :as login]
            [ring.middleware.cors :as cors]))

(defn echo-handler [req]
  req)

(defroutes app-routes
  (POST "/login" req (login/handler req))
  (route/not-found "Not Found"))

(def app
  (cors/wrap-cors
    app-routes
    :access-control-allow-origin #".*"
    :access-control-allow-methods [:post]))
