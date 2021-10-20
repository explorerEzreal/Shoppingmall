<template>
  <div class="goods">
    <GoodsListitem v-for="item in goods" v-bind:goods-item="item"/>
  </div>
</template>

<script>

import GoodsListitem from "./GoodsListitem";

export default {
  name: "GoodsList",
  components:{
    GoodsListitem,
  },
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>
