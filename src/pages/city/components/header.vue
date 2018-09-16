<template>
  <div class="city-header">
    <div class="back-btn" @click="gotoHome"></div>
    <div class="title">
      {{headerTitle}}
    </div>
    <div class="search">
      <input type="text" class="input-text" placeholder="searchTip" v-model="inputContent">
    </div>
    <div class="search-result" v-show="showCity">
      <ul>
        <li class="city-item">name</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ConvertPinyin} from '../js/returnPinYin.js'
import {ConverFirstLetter} from '../js/returnFirstLetter.js'
import {ConverUpLetter} from '../js/returnFirstLetter.js'
export default{
  props: {
    cities: Object
  },
  data () {
    return {
      headerTitle: '城市选择',
      inputContent: '',
      showCity: false
    }
  },
  methods: {
    gotoHome () {
      this.$router.push('/')
    }
  }
}
</script>
