<template>
 <div  class="list-container">
  <div class="list-item clear-fix" v-for="data in list">
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
     <span>没有更多啦，看看别的吧</span>
  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"spinner='waveDots'></infinite-loading>
 
</div>
</template>
<script>
  import InfiniteLoading from 'vue-infinite-loading';
  import axios from "axios"
export default {
  data() {
    return {
      list: [],
    };
  },
  created(){
    this.init();
  },
  methods: {
    init(){
       axios.get("static/data.json").then(res=>{
           this.list=res.data.listMore
        })
    },
    onInfinite() {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        //this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }, 1000);
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>