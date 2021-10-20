<template>
  <div class="cart">
<!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{Length}})</div>
    </nav-bar>
    <cart-list class="cart-list"/>
    <bottom-bar/>


  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";

import {mapGetters} from "vuex"


export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
   // ...mapGetters(['cartLength', 'cartList'])
    ...mapGetters({
      Length:'cartLength',
    })
  }
}
</script>

<style scoped>

.cart {
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-high-text);
  color: #ffffff;
  font-weight: 700;
}
.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}

</style>
