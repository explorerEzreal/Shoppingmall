<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': ischecked}" @click="selectItem">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
      ischecked: {
		    type: Boolean,
        default: false
      }
    },
    data() {
		  return {
		    checked: this.ischecked
      }
    },
    methods: {
      selectItem() {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value: function (newValue) {
        this.checked = newValue;
      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: red;
    border-color: red;
  }
</style>
