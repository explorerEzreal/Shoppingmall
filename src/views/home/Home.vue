<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>

    <TabControl
      :title="['流行','新款','精选',]"
      @tabClick="tabClick"
      ref="toptabControl"
      class="tab-control2"
      v-show="istabfixed"
    />

   <Scroll class="content"
           ref="scroll"
           :probe-type="3"
           :pulling-upload="true"
           @scroll="contentscroll"
           @pullingup="contentpulling">
     <HomeSwiper
       :banners="banners"
       @swiperimgLoad="swiperimgLoad"/>
     <RecommendView :recommends="recommends"/>
     <HomeFeature/>
     <TabControl
       class="tab-control"
       :title="['流行','新款','精选',]"
       @tabClick="tabClick" ref="tabControl"
     />
     <GoodsList v-bind:goods="goods[currentType].list"/>
   </Scroll>

    <BackTop v-on:click.native="backClick" v-show="isshowbacktop"/>



  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/BackTop/BackTop";
import Scroll from "../../components/common/scroll/Scroll";


import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeature from "./childComps/HomeFeature";


import {getHomemuitidata, getHomegoods} from "../../network/home";
import {debounce} from "../../common/until";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
    BackTop,
    Scroll
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isshowbacktop: false,
      taboffsetTop: 0,
      istabfixed: false,
      saveY: 0,
      itemimglisnner: null
    }
  },
  created() {
    // 1 请求多个数据
    this.getHomemuitidata()
    // 2 请求商品数据
    this.getHomegoods('pop')
    this.getHomegoods('new')
    this.getHomegoods('sell')

  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y

    this.$bus.$off('goodsItemLoad', this.itemimglisnner)
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh(),50)
    this.itemimglisnner = () => {
      refresh()
    }
    this.$bus.$on('goodsItemLoad',this.itemimglisnner )
  },
  methods: {
    /**
     * 事件监听的相关方法
     */

    swiperimgLoad() {
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, )
    },
    contentscroll(position) {
      // 1 判断是否显示backtop
      this.isshowbacktop = (-position.y) >1000
      // 2 判断tabcontrol是否吸顶
      this.istabfixed = (-position.y) > this.taboffsetTop
    },
    contentpulling() {
      this.getHomegoods(this.currentType)

      this.$refs.scroll.scroll.refresh()
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.toptabControl.coindex = index
      this.$refs.tabControl.coindex = index


    },


    //请求上面的数据
    getHomemuitidata(){
      getHomemuitidata().then( res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomegoods(type) {
      const page = this.goods[type].page + 1
      getHomegoods(type, page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // console.log(type+this.goods[type].list.length);
        this.$refs.scroll.scrollpull()
      })
    }
  }


}
</script>

<style scoped>

#home{


}

.home-nav{
  background-color: var(--color-tint);
  color: #eeeeee;

  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 9;*/
}

.tab-control{
  background-color: #ffffff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control2 {
  position: relative;
  z-index: 9;
}


</style>
