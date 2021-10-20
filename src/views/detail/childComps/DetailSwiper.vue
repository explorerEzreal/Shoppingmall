<template>
  <div class="detail-swiper">
    <swiper class="swiperi">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>

  .swiperi{
    height: 300px;
    overflow: hidden;

  }

</style>
