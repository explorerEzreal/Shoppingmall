<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailnav"/>
    <scroll class="content"
            ref="scroll"
            @scroll="contentscroll"
            :probe-type="3">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <BackTop v-on:click.native="backTop" v-show="isshowbacktop"/>
    <detail-bottom-bar @addToCart="addToCar"/>
  </div>
</template>

<script>

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/BackTop/BackTop";


import Scroll from "../../components/common/scroll/Scroll";

import {getDetail, getRecommend,  Goods, Shop, GoodsParam} from "network/detail";
import {debounce} from "../../common/until";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    DetailBottomBar,
    BackTop
  },
  data() {
    return {
      iid:null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemimglisnner: null,
      themeTopYs: [],
      currentIndex: 0,
      isshowbacktop: false
    }
  },
  created() {
    // 1 保存id
    this.iid = this.$route.params.iid
    // 2 根据id请求数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      console.log(res);

      // 1.顶部轮播图数据
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)


      // 6.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    })
    // 3 推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
      // console.log(res.data.list)
    })

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh(),50)
    this.itemimglisnner = () => {
      refresh()
    }
    this.$bus.$on('goodsItemLoad',this.itemimglisnner )


  },
  destroyed() {
    this.$bus.$off('goodsItemLoad', this.itemimglisnner)
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)

    },
    addToCar(){
      // 1获取购物车需要的信息
      const product = {}
      product.iid = this.iid;
      product.imgURL = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc;
      product.Price = parseFloat(this.goods.realPrice)



      this.$store.dispatch('addCar', product)

    },
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentscroll(position) {
      let positionY = -position.y
      let lenth = this.themeTopYs.length-1
      for (let i = 0; i < lenth; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i;
          this.$refs.detailnav.actiindex = this.currentIndex
        }
      }
      this.isshowbacktop = (-position.y) >1000
    }
  },
}
</script>

<style scoped>

#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}

</style>
