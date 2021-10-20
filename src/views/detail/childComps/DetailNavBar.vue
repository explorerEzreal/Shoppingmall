<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
             v-for="(item, index) in title"
             @click="titleClick(index)"
             :class="{active: index === actiindex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title:['商品', '参数', '评论', '推荐',],
      actiindex: 0
    }
  },
  props: {

  },
  methods: {
    titleClick(index) {
      this.actiindex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back img {
    margin-top: 10px;
  }

</style>
