<template>
  <div id="app">
    <Keep-alive exclude="detail">
      <router-view></router-view>
    </Keep-alive>
    <MainTabBar></MainTabBar>


  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }

}
</script>

<style>
@import "assets/css/base.css";


</style>
