<template>
  <div class="home">
    <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :poster="item.poster_path" :vote="item.vote_average"></AllMovies>
  </div>
</template>

<script>
// @ is an alias to /src
import AllMovies from '@/components/Movies.vue'
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      page: 1
    }
  },
  mounted () {
    this.AllMovies(this.page)
  },
  methods: {
    async AllMovies (page) {
      const res = await apiService.getMovies(page)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: rgb(15,11,60);
  background: linear-gradient(90deg, rgba(15,11,60,1) 0%, rgba(117,21,67,1) 50%, rgba(255,111,0,0.9416141456582633) 100%);
}
</style>
