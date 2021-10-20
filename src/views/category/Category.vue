<template>
  <div id="Category" class="wrapper">
    <ul>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
    </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: "Category",
  data() {
    return {
      bscrol: null
    }
  },
  mounted() {
    this.bscrol = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,
      pullUpLoad: true,
    })
    this.bscrol.on('scroll', (position) => {
      // console.log(position);
    })
    this.bscrol.on('pullingUp', () => {
      console.log('上拉加载更多');
    })
  }

}
</script>

<style scoped>
.wrapper {
  height: 200px;
  overflow: hidden;
  background: #42b983;
}

</style>
