<template>
  <div class="detailheader">
      <router-link tag="div" to="/">
          <span class="iconfontBackImg"></span>
          <span class="iconfont back">&#xe624;</span>
      </router-link>
      <div class="fixed"
        v-if="headerShow"
        :style="opacityStyle">
        <router-link
        tag="span"
        to="/"
        class="iconfont fixed-Back">&#xe624;</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  data () {
    return {
      headerShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 0) {
        this.headerShow = true
        let opacity = scrollTop / 160
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
      } else {
        this.headerShow = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  }
}
</script>

<style>
.detailheader {
    z-index: 99;
    height: .86rem;
    background-color: rgb(6,192,211);
}
.back {
    position: fixed;
    color: #fff;
    top: 8px;
    left: 7px;
    font-size: 20px;
}
.iconfontBackImg {
    display: block;
    position: fixed;
    top: 3px;
    left:3px;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    background-color: rgba(0,0,0,0.5);
}
.fixed {
  height: .86rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 40px;
  background-color: rgb(6,192,211);
}
.fixed-Back {
  position: fixed;
  top: 4px;
  left: 5px;
  font-size: 25px;
  color: white;
}

</style>
