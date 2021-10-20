<template>
  <scroll >
    <div >
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "../../../components/common/scroll/Scroll";
import CartListItem from './CartListItem'
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>


</style>
