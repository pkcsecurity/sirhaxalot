(ns sirhaxalot.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sirhaxalot.utils :as utils]
            [cheshire.core :as cheshire]
            [sirhaxalot.properties :as p]
            [sirhaxalot.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response) "Hello World"))))
 
  (testing "Test /echo returns expected resonse"
    (let [json-post {:username (p/property :username)
                     :password (p/property :password)}
          response (app (-> (mock/request :post"/echo")
                            (mock/content-type "application/json")
                            (mock/body (cheshire/generate-string json-post))))
          body (utils/parse-body (:body response))]
      (is (= (:status response) 200))
      (is (= body json-post))))
  
  (testing "Test /login returns expected resonse"
    (let [json-post {:username (p/property :username)
                     :password (p/property :password)
                     :url "https://www.google.com"}
          response (app (-> (mock/request :post"/login")
                            (mock/content-type "application/json")
                            (mock/body (cheshire/generate-string json-post))))
          body (utils/parse-body (:body response))]
      (is (= (:status response) 200))
      (is (= body (:url json-post)))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
