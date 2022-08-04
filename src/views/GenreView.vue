<template>
  <nav id="menu" class="genre">>
    <AllGenre v-for="item in data_genre" :key="item.id" :id="item.id" :name="item.name">
    </AllGenre>
  </nav>
</template>

<script>
// @ is an alias to /src
import AllGenre from '@/components/Genre.vue'
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'GenreView',
  components: {
    AllGenre
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.AllGenre()
  },
  methods: {
    async AllGenre () {
      const res = await apiService.getGenre()
      const genre = await res.json()
      this.data_genre = genre.genres
    }
  }
}
</script>
