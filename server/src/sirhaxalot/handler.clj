(ns sirhaxalot.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [sirhaxalot.login :as login]
            [ring.middleware.defaults :refer [api-defaults wrap-defaults]]))

(defn echo-handler [req]
  req)

(defroutes app-routes
  (GET "/" [] "Hello World")
  (POST "/echo" req (echo-handler req))
  (POST "/login" req (login/handler req))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes api-defaults))
