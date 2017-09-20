<template>
     <div class="list-container"  >
        <div class="list-item clear-fix" v-for="data in datas">
           <div class="item-img-container float-left">
                <img :src="data.img" :alt="data.title"/>
           </div>
            <div class="item-content">
                    <div class="item-title-container clear-fix">
                        <h3 class="float-left" v-text="data.title"></h3>
                        <span class="float-right" v-text="data.distance"></span>
                    </div>
                    <p class="item-sub-title" v-text="data.subTitle"></p>
                    <div class="item-price-container clear-fix">
                        <span class="price float-left" v-text="'￥'+data.price"></span>
                        <span class="mumber float-right" v-text="'已售'+data.mumber"></span>
                    </div>
             </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default{
        data:function(){
            return{
                datas: []
            }
        },
        created(){
            this.init();
        },
        methods:{
             init(){
                 axios.get("static/data.json").then(res=>{
                     this.datas=res.data.list
                 })
            }
        }
    }
</script>
<style lang="less" >
    .list-container {
        background-color: #fff;
        padding: 0 0.15rem;
    }

    .list-item {
        
     background-color: #fff;
    display:flex;
    width: 100%;
    height:1.5rem;
    /* border-bottom: 2px solid #eee; */
    border:1px solid #E3F1E3;
    .item-img-container {
       width:25%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            border-bottom:1px solid #eee;
            border-right:1px solid #eee;
        }
    }
    .item-content {
        margin:auto;
            margin-left: 0.8rem;
            width:55%;
            .item-title-container {
                height: 0.4rem;

                h3 {
                    font-size: 0.32rem;
                    line-height: 1;
                    color: #333;
                }
                span {
                    font-size: 0.2rem;
                    line-height: 0.4rem;
                    color: #999;
                }
            }
            .item-sub-title {
                font-size:0.22rem;
                color: #666;
                line-height: 1.5;
            }
            .item-price-container {
                margin-top: 0.1rem;
                .price {
                    font-size: 0.25rem;
                    line-height: 1;
                    font-weight: 900;
                    color: rgb(233, 32, 61);
                }
                .mumber {
                    font-size: 0.2rem;
                    line-height: 0.15rem;
                    color: #999;
                }
            }
        }
    }
    .item-img-container,.item-content{vertical-align: middle;}
</style>