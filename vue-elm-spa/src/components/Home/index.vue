<template>
   <div class="box">
   <homeheader/>
   <Category/>
   <div class="splite"></div>
    <Ad/>
    <List/>
  
</div>
</template>

<script>
    import homeheader from "./subPage/homehead.vue"
    import Category from "./subPage/Category.vue"
    import Ad from "./subPage/Ad.vue"
    import List from "./subPage/List.vue"
    export default{
        name:'home',
        components:{
            homeheader,
            Category,
            Ad,
            List
        }
    }
</script>
    <style lang="css" scoped> 
        
    </style>