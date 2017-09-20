<template>
     <div class="hadOrder">
            <div class="order-top">
                <div class="order-title">
                    <h2>我的订单</h2><span class="float-right">全部订单&nbsp;></span>
                </div>
                <div class="order-cons">
                    <img src="@/../static/images/order/order1.jpg"/><h1>上隐荷叶饭（龙岗店）</h1><span>订单已完成</span>
                    <h3> 招牌荷叶鸡饭（本店招牌）</h3>
                    <h4 class="price">￥13.5</h4>
                    <a class="float-right">再来一单</a>
                </div>
                <div class="order-foot"><span>查看更多</span></div>
            </div>
            <div class="order-bottom">
                <div class="bt-title"><span v-text="bttitle"></span></div>
                 <div class="otherorder-cons"  v-for="item in lists">
                    <img :src="item.img"/>
                    <h1 >{{item.bigtitle}} <h3>{{item.activities}}</h3></h1>
                    <span v-text="item.purse"></span>
                </div>
                <div class="nomore"><span>没有更多了</span></div>
            </div>
        </div>
</template>
<script>
/*引入公共方法*/
    import axios from "axios"
    export default{
        name:'hadlogin',
        data(){
            return{
                name: '',
                bttitle:'附近买过',
                lists:[
                    {"img":"@/../static/images/order/order1.jpg","bigtitle":"饿维码","activities":"满25减17，满58减28，满88减42","purse":"买过一次"},
                    {"img":"@/../static/images/order/order1.jpg","bigtitle":"饿维码","activities":"满25减17，满58减28，满88减42","purse":"买过一次"},
                    {"img":"@/../static/images/order/order1.jpg","bigtitle":"饿维码","activities":"满25减17，满58减28，满88减42","purse":"买过一次"},
                    {"img":"@/../static/images/order/order1.jpg","bigtitle":"饿维码","activities":"满25减17，满58减28，满88减42","purse":"买过一次"}
                ]
            }
        },
        created(){
            this.init();
        },
        methods:{
             init(){
                axios.get("static/data.json").then((res=>{
                    this.categorys=res.data.categorys
                 }))
            },
            quit(){
                /*删除cookie*/
                delCookie('username')
            }
        }
    }
</script>

<style lang="less" scoped>
    .hadOrder{font-size:0.3rem;text-indent:0.5rem;
        .order-top{border-bottom:0.05rem solid #fff;
            .order-title{display:flex; margin-top:0.2rem;
                h2{flex-grow:1;font-size:0.35rem;font-weight:bold;}
                span{color:#0406f0;font-size:0.3rem;margin-right:0.5rem;}
            }
            .order-cons{
                background:#fff;opacity:0.8;
                margin-top:0.2rem;
                img{width:14%;vertical-align:middle;margin-top:0.2rem;}
                h1{display:inline-block;font-size:0.36rem;font-weight:bold;vertical-align:middle;margin:0 0.3rem 0 -0.2rem;}
                span{font-size:0.2rem;}
                h3,h4{margin-top:0.3rem;margin-left:1rem;font-size:0.3rem;}
                h4{}
                a{margin-top:-0.6rem;margin-right:0.5rem;border:2px solid #fff;color:#0406f0;border-radius:15px;text-indent:0;padding:0 0.1rem;}
                a:hover{text-shaddow:1px 1px 5px #f5f4f5;}
            }
            .order-foot{display:flex;text-align:center;
                span{margin:0 auto;}
            }
        }
        .order-bottom{margin-top:0.2rem;
          .bt-title{font-size:0.38rem;font-weight:bold;height:0.6rem;}
            .otherorder-cons{
                background:#fff;opacity:0.8;
               padding:0.4rem 0;
                border-bottom:0.1rem solid #f5f4f5;
                margin-bottom:6px ;
                img{width:20%;vertical-align:middle;opacity:1}
                h1{display:inline-block;font-size:0.40rem;font-weight:bold;vertical-align:middle;margin:0 0.3rem 0 -0.2rem;
                    h3{font-size:0.25rem;}
                }
                span{font-size:0.2rem;margin-left:-0.2rem;}
            }  
        }
        .nomore{
            dipplay:flex;text-align:center;
            span{margin:auto;}
        }
    }
</style>
