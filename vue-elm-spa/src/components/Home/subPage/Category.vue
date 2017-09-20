<template>
     <div id="home-category" class="index-container">
       <div class="carousel-item">
            <ul class="clear-fix" v-for="items in categorys">
                <li class="float-left" v-for="item in items">
                    <img :src="item.img">
                    <span v-text="item.title"></span>
                </li>
            </ul>

        </div>
        <div>
            <ul>
                <li :class={selected:index}></li>
            </ul>
        </div>
    </div>
</template>
<script>
   import axios from "axios"
    export default{
        name:'homebody',
        data:function(){
            return {
                index:0,
                categorys:{}
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
            }
        }
    } 
</script>

<style lang="less">
   #home-category {
    background-color: #fff;
    padding: 0.01rem;
    height:2.8rem;
    overflow:hidden;
    .carousel-item{
         ul {
            width: 100%;
            height: auto;
        }
        li {
            display: block;
            list-style: none;
            height:1.3rem;
            width: 25%;
            text-align: center;
            color: #666;
            font-size:0.1rem;
            img{width:100%;height:70%;
                
            }
            span{font-size:0.3rem;}
        }
        
    }
    
}
</style>