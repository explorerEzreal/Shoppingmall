<template>
  <div class="tab-control">
    <div v-for="(item ,index) in title"
         class="tab-contorl-item"
         :class="{active: coindex==index}"
         @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return{
      coindex:0,
    }
  },
  methods:{
    itemclick(index) {
      this.coindex = index;
      this.$emit('tabClick',index)
    }
  },
  props: {
    title:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-contorl-item{
  flex: 1;
}
.active{
  color: var(--color-high-text)
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
  padding: 3px;
}



</style>
