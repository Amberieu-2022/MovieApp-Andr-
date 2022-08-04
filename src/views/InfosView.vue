<template>
  <div class="home">
    <img :src="'https://image.tmdb.org/t/p/w300/' + data.poster_path" alt=""/>
    <div class="infos">
      <p>Date de sortie: {{ data.release_date }}</p>
      <h1>{{ data.title }}</h1>
      <p>{{ data.overview }}</p>
      <p>Note: {{ data.vote_average }}</p>
      <p>Genre: {{ data.name }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'InfosView',
  components: {
  },
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    console.log(this.id)
    this.InfosMovie(this.id)
  },
  methods: {
    async InfosMovie (id) {
      const res = await apiService.getInfosM(id)
      const infos = await res.json()
      this.data = infos
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
  color:white
}
p {
  color:white;
  font-size: 1.5rem;
}
.infos {
  margin: 10px;
}
</style>
