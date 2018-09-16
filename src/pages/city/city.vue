<template>
  <div class="city">
    <cityHeader :cities="cities"></cityHeader>
  </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './components/header'

export default {
  data () {
    return {
      cities: {}
    }
  },
  created () {
    this.getCityData();
  },
  methods: {
    getCityData () {
      axios.get('/api/index').then((res) =>{
        let cityData = res.data
        this.cities = cityData.data.data.cities;
        //this.hotCities = cityData.data.data.hotCities;
      })
    }
  },
  components: {
    cityHeader
  }
}
</script>

<style type="text/css" lang="stylus">
</style>
