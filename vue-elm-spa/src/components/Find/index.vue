<template>
    <div class="box">
        <recommend/>
        <div class="splite"></div>
        <discount/>
        <div class="splite"></div>
        <limitedtime/>
    </div>
</template>
<script>
    import recommend from "./subPage/recommend"
    import discount from "./subPage/discount"
    import limitedtime from "./subPage/limitedtime"
    export default{
        components:{
            recommend,
            discount,
            limitedtime
        }
    }
</script>
<style lang="css" scoped>
    .splite{height:0.5rem;bakcground:#fcfcfc;}
</style>