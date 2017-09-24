<template>
    <div id="home-ad">
                <h2>超值特惠</h2>
                <div class="ad-container clear-fix">
                   <div v-for="item in contexts" class="ad-item">
                        <a :href="item.link">
                            <img :src="item.img" alt={item.title}/>
                        </a>
                   </div>
                </div>
            </div>
</template>

<script>
    import axios from "axios"
    export default {
        data:function(){
            return {
                contexts:[]
            }
        },
        created(){
            this.init();
        },
        methods:{
            init(){
                 axios.get("static/data.json").then(res=>this.contexts=res.data.ads)
            }
           
        }
    }
</script>

<style lang="less" scoped>
        #home-ad {
        background-color: #fff;

        h2 {
            font-size: 0.3rem;
            font-weight: 700;
            padding: 10px 15px;
            border-bottom: 1px solid #f1f1f1;
        }

        .ad-container {
            width: 100%;
            padding: 10px 15px;
        }

        .ad-item {
             width:30%;height:100%;
            display:flex;
            flex-flow:row;
            margin-left:12px;
            border-right:1px solid #ccc;
            border-bottom:1px solid #ccc;
            height:2.5rem;
            display:inline-block;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
