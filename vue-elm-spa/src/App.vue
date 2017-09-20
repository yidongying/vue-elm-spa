<template>
    <div id="root">
        <div class="navRoot" id="navRoot">
            <router-link class="navLink " tag="a" to="/">
            <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
            <span class="navLinkText" >外卖</span>
            </router-link>
            <router-link  class="navLink" tag="a" to="/find">
            <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
            <span class="navLinkText">发现</span>
            </router-link>
            <router-link  class="navLink" tag="a" to="/order">
            <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
            <span class="navLinkText">订单</span>
            </router-link>
            <router-link  class="navLink" tag="a" to="/user">
            <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
            <span class="navLinkText">我的</span>
            </router-link>
            <router-link   tag="a" to="/login"></router-link>
        </div>
           <router-view></router-view>
    </div>
</template>

<script>
    export default{
      
    }
</script>