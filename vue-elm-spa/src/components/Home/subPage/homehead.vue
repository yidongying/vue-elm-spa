<template>
       <div id="home-header" class="clear-fix">
                <div class="home-header-left float-left">
                    <span >{{getCityName}}</span>
                    &nbsp;
                    <i class="icon-angle-down"></i>
                </div>
                <div class="home-header-right float-right">
                    <i class="icon-user"></i>
                </div>
                <div class="home-header-middle">
                    <div class="search-container">
                        <i class="icon-search"></i>
                        <input class="search-key" type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
</template>
<script>
    export default{
        name:'homeheader',
        computed:{
            getCityName:function(){return this.$store.state.cityName}
        }
    }
</script>
<style lang="less" scoped>

  #home-header {
      box-sizing:border-box;
    * {
        color: #fff;
        font-size: 0.3rem;
        line-height: 1;
    }
    background-color: rgb(233, 52, 61);
    padding:0.5rem 0;
    .home-header-left{
        font-size:0.4rem;
        width: 1.3rem;
        text-align: left;
        margin: 0.05rem 0;
        span{margin-left:0.25rem;margin-right:-0.2rem;}
    }
    .home-header-right {
       margin-right:0.3rem;
        
          border-radius:50px;
          height:0.60rem;
        .icon-user:before{
            font-size:0.6rem;
          padding:0.2rem 0.2rem;
          text-align:center;
        }
    }
    .home-header-middle{
        width:5rem;
        margin:0 auto;
        padding-left:0.2rem;
        .search-container {
         display:flex;
        height:0.5rem;
        background-color: #fff;
        border-radius: 15px;
            i {
                color: #ccc !important;
            }
            input.search-key {
                height:0.5rem;
                width:100%;
               margin-top:0;
               border-radius:0px;
            }
        }
    }
}
</style>