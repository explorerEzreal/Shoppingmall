<template>
  <div class="bottom-menu">
    <CheckboxButton
      class="select-all"
      @click.native="checkBtnClick"
      v-bind:ischecked="isSelectAll"/>
    <span>全选</span>
    <span class="total-price">合计: {{totalPrice}}</span>
    <span class="buy-product">去计算({{totalCount}})</span>
  </div>
</template>

<script>
import CheckboxButton from './CheckButton'

	export default {
		name: "BottomBar",
    components: {
      CheckboxButton,
    },
    computed: {
      totalPrice() {
        return this.$store.getters.cartList.filter(item => {
          return item.ischecked
        }).reduce((preValue, item) => {
          // console.log(item.count * item.newPrice);
          return preValue + item.count * item.Price
        }, 0).toFixed(2) + '￥'
      },
      totalCount() {
        return this.$store.getters.cartList.filter(item => {
          return item.ischecked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      },
      isSelectAll() {
        return !(this.$store.getters.cartList.filter(item => !item.ischecked).length)
      }
    },
    methods: {
      checkBtnClick() {
        if(this.isSelectAll){
          this.$store.getters.cartList.forEach(item => item.ischecked = false)
        }else {
          this.$store.getters.cartList.forEach(item => item.ischecked = true)
        }

      }
    }

	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
