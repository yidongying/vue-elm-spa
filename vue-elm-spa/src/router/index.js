import  Vue from "vue"
import VueRouter from "vue-router"

import home from "../components/Home"
import find from "../components/Find"
import order from "../components/Order"
import user from "../components/User"
import login from "../components/login"


import hadlogin from "../components/Order/subpage/hadlogin.vue" 

Vue.use(VueRouter);
let router =new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/find',
            component:find
        },
        {
            path:'/order',
            component:order,
        },
        {
            path:'/user',
            component:user
        },
        {
            path:'/login',
            components:{
                default:login
            }
        },
        {
            path:'/orders',
            component:hadlogin
        },
    ]
})

export default router;