<template>
    <div class="box">
        <div class="login">
            <span class="icon-user"></span>
            <h1 v-if="!Curuser">
                <router-link to="/login"><span>立即登录</span></router-link>
                <router-view></router-view>
                <span>登陆后可享受更多特权</span><span></span></h1>
            <h1 v-else>用户{{this.Curuser}} <span class="unlogin" @click="unlogin">注销</span></h1>
        </div>

        <div class="activities">
            <div><span class="icon-purse"></span><span>钱包</span></div>
             <div><span class="icon-purse"></span><span>优惠</span></div>
             <div><span class="icon-purse"></span><span>积分</span></div>
        </div>
        <div class="info-list">
            <div v-for="item in cons" v-text="item"></div>
        </div>
    </div>
</template>

<script>
    
    export default{
        components:{},
        data:function(){
            return {
                active:['钱包','优惠','积分'],
                cons:['收货地址','我的收藏','积分商城','服务中心','欢迎评分','加盟合作'],
                Curuser:''
            }
        },
        created(){
           if(window.localStorage){
               this.Curuser=window.localStorage.user;
           }
        },
        methods:{
            unlogin(){
                this.Curuser = '';
				localStorage.clear();
            }
        }
    }
</script>

<style lang="css" scoped>
    .login{display:flex;color:#666;height:2.7rem; align-items:Center;border-radius:30px;
    }
    .icon-user{margin-left:0.5rem;; height:1rem;width:1rem;border-radius: 50px;
        text-align:center;line-height:1rem;background:#15E6BE}
    .icon-user:before{
        font-size:0.75rem;
        padding:0.1rem 0.2rem;
        text-align:center;
        color:#FCFCFC;
    }
    .login>h1{font-size:0.36rem;margin-left:0.8rem;}
    .login>h1>span{font-size:0.28rem;display:block;}

    .activities{width:100%;height: 1.8rem;background: #FCFCFC;display:flex;align-items:center;
        justify-content: center;border-bottom:15px solid #E0D8D8}
    .activities>div{ width:30%;text-align:center;color:#444;font-size:0.35rem;}

    .info-list{background:#FCFCFC;}
    .info-list>div{height:1.2rem;line-height:1.2rem; text-indent: 0.2rem;font-size:0.35rem;
        border-bottom:5px solid #E5E4E4}
        .info-list>div:last-child{border:0;}
    .unlogin{color:#00f;text-decoration:underline}
</style>