<template>
  <div class="home">
    <div class="allmovies" v-if="data !== null">
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :poster="item.poster_path"></AllMovies>
    </div>
    <div v-else><h1>Tapez votre recherche...</h1></div>
    <input placeholder ="Recherchez votre film" type="text"  @input="search = $event.target.value"/>
  </div>
</template>

<script>
import AllMovies from '@/components/Movies.vue'
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'SearchView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      search: ''
    }
  },

  BeforeMount () {
    this.searchMovies(this.search)
  },
  watch: {
    search () {
      this.searchMovies(this.search)
    }
  },
  methods: {
    async searchMovies (search) {
      const res = await apiService.getSearch(search)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>
<style scoped>
.allmovies {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: rgb(15,11,60);
  background: linear-gradient(90deg, rgba(15,11,60,1) 0%, rgba(117,21,67,1) 50%, rgba(255,111,0,0.9416141456582633) 100%);
  padding: 20px;
}
input {
  width: 50%;
  height: 30%;
}
</style>
