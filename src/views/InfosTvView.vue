<template>
  <div class="home">
    <img :src="'https://image.tmdb.org/t/p/w300/' + data.poster_path" alt=""/>
    <div class="infos">
      <h1>{{ data.name }}</h1>
    </div>
  </div>
</template>

<script>

import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'InfosTvView',
  components: {
  },
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.InfosTv(this.id)
  },
  methods: {
    async InfosTv (id) {
      const res = await apiService.getInfosTv(id)
      const infostv = await res.json()
      this.data = infostv
      console.log(infostv)
    }
  }
}
</script>
