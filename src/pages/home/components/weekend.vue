<template>
  <div class="recomend">
    <p class="title">周末推荐</p>
    <ul>
      <li v-for="item of recommed" class="left" :key="item.id">
        <img :src="item.imgUrl">
        <p>{{item.title}}</p>
        <p class="huise">{{item.desc}}</p>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recommed: Array
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.title
  text-indent .2rem
  line-height .8rem
  margin-top .2rem
  background #eee
  ul
    list-style none
    margin 0
    padding 0
    .left img
      width 100%
    li
      text-align left
</style>
