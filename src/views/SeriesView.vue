<template>
  <div class="home">
    <AllSerie v-for="item in data" :key="item.id" :id="item.id" :title="item.name" :overview="item.overview" :poster="item.poster_path"></AllSerie>
  </div>
</template>

<script>
// @ is an alias to /src
import AllSerie from '@/components/Series.vue'
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'SeriesView',
  components: {
    AllSerie
  },
  data () {
    return {
      data: null,
      page: 1
    }
  },
  mounted () {
    this.AllSerie(this.page)
  },
  methods: {
    async AllSerie (page) {
      const res = await apiService.getTv(page)
      const serie = await res.json()
      this.data = serie.results
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
