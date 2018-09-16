<template>
  <div class="swiper.container">
    <div class="wrapper">
      <swiper :options='swiperOption' v-if="showSwiper">
        <swiper-slide v-for="item in list" :key="item.id">
          <img :src="item.imgUrl" class="swiper-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  activated () {
    return this.list.length
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped type="text/stylus" lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    backgroud #fff
  .wrapper
    width 100%
    height 0
    padding-bottom 31.6%
    overflow hidden
    backgroud #eee
    .swiper-img
      width 100%
      height 100%
</style>
