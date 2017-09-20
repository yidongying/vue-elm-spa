<template>
           <div class="list">
                <h2 class="home-list-title">猜你喜欢</h2>
                <listComponent/>
                <div >
                    <span class="down-tip">下拉更新</span>
                    <loadMore/>
                </div>
            </div>
</template>

<script>
import listComponent from "./listItem/listComponent"
import loadMore from "./listItem/loadMore"

    export default{
         name:'List',
        components:{
            listComponent,
           loadMore
        }
    }
</script>

<style>
    .home-list-title{font-size:0.35rem;text-indent:0.18rem;}
    .down-tip{display:block;width:100%;height:0.6rem;line-height:0.6rem;font-size:0.4rem;text-align:center;}
</style>