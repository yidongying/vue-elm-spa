import Vue from "vue"
import VueResource from "vue-resource"

import App from "./App"
import router from "@/router"
import store from "@/store"

import "../static/commonjs/f47f45.js"
import "./assets/css/App.css"

new Vue({
    el:'#app',
    router,
    store,
    template:'<App />',
    components:{App}
})