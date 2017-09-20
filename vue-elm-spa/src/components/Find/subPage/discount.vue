<template>
     <div class="recommend">
       <div class="title">天天特价</div>
       <span class="title">特价商品，一网打尽</span>
       <div class="img-wrap">
            <a v-for="img in imgs"><img :src="img"/></a>
       </div>
       <span class="title">查看更多</span>
    </div>
</template>

<script>
  export default{
    data:function(){
            return {
                imgs:["../../../../static/images/recommend/recommend4.jpg",
                    "../../../../static/images/recommend/recommend5.jpg",
                    "../../../../static/images/recommend/recommend6.jpg"
                ]
            }
        }
  }
</script>

<style lang="less" scoped>
    .recommend{
        .title{item-align:center;text-align:center;display:block;
        }
        div.title{font-size:0.4rem;letter-space:0.1rem;color:#94B969}
        span.title{color:#A19F9F}
        .img-wrap{width:100%;display:flex;height:2.5rem;}
        img{width:100%;height:100%;}

    }
</style>