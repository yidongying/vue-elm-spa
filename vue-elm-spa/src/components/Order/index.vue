<template>
    <div class="box">
        <div class="order" v-if="!isLogin">
            <div>登陆后查看外卖订单</div>
            <router-link to="/login"><span >立即登录</span></router-link>
            <router-view></router-view>
        </div>
        <hadlogin v-else/>
    </div>
</template>
<script>
    import hadlogin from "./subpage/hadlogin.vue"
    export default{
        components:{hadlogin},
      data:function(){
          return {
              isLogin:false
          } 
      },
      created(){
           if(window.localStorage.length>0){
               this.isLogin=true;
           }
      }
    }
</script>
<style lang="less" scoped>
    .order{width:100%;height:12.5rem;margin:auto;
        background-image:url(../../assets/images/order_bg.png);
            background-position:center 10%;
            text-align:center;
            position:relative;
            border:1px solid #f5f4f5;
            div{font-size:0.5rem;color:#D4C8C8;font-weight:bold; overflow:auto;  line-height:1.4rem;    margin-top:5.8rem;}
            span{border-radius: 0.3rem; background:#95ED81;padding:0.2rem 0.5rem;font-size:0.3rem;color:#fff;}
     }
</style>
