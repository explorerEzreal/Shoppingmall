<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType:{
      type: Number,
      default: 0
    },
    pullingUpload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType:this.probeType,
      pullingUp: this.pullingUp
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingup')
    })

  },
  methods:{
    scrollTo(x,y,time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
      // console.log('ssssss');
    },
    scrollpull() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
      // console.log('----')
    }
  }
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}

</style>
