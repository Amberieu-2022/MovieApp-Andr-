<template>
  <div class="home">
    <img :src="'https://image.tmdb.org/t/p/w300/' + data.poster_path" alt=""/>
    <div class="infos">
      <h1>{{ data.name }}</h1>
      <p>{{ data.overview }}</p>
    </div>
  </div>
</template>

<script>

import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'InfosTvView',
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

<style scoped>
.home {
  padding: 40px;
  display: flex;
  align-content: center;
  background: rgb(15,11,60);
  background: linear-gradient(90deg, rgba(15,11,60,1) 0%, rgba(117,21,67,1) 50%, rgba(255,111,0,0.9416141456582633) 100%);
}
h1 {
  font-size: 3rem;
  color:white;
  text-align: center;
}
p {
  color:white;
  font-size: 1.5rem;
}
.infos {
    margin: 10px;
}
</style>
