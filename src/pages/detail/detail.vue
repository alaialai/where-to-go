<template>
  <div>
    <Header></Header>
    <Banner :sightName="sightName" :bannerImg="bannerImg"></Banner>
    <List :list="list" ></List>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/banner'
import Header from './components/header'
import List from './components/list'

export default {
  name: 'detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      console.log(123)
      axios.get('/static/mock/detail.json')
        .then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess (res) {
      console.log(res)
      if (res.status === 200) {
        this.sightName = res.data.data.sightName
        this.bannerImg = res.data.data.bannerImg
        this.list = res.data.data.list
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: {
    Banner,
    Header,
    List
  }
}
</script>
