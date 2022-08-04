<template>
  <div class="home">
    <ByGenre v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :poster="item.poster_path"></ByGenre>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'PageGenreView',
  components: {
  },
  data () {
    return {
      data: null,
      id: this.$route.params.id,
      page: 1
    }
  },
  mounted () {
    this.ByGenre(this.page)
  },
  methods: {
    async ByGenre (id, page) {
      const res = await apiService.getPageGenre(id, page)
      const movies = await res.json()
      this.data = movies.res
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
