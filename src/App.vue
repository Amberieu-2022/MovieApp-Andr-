<template>
  <nav id="first">
    <div id="menu-button" class="close"></div>
      <nav id="menu" class="genre">
        <AllGenre v-for="item in data_genre" :key="item.id" :id="item.id" :name="item.name">
        </AllGenre>
      </nav>
    <router-link to ="/">Movies</router-link>
    <router-link to ="/Serie/">TV Show</router-link>
    <router-link to ="/Search/">Search</router-link>
  </nav>
  <div class="box">
    <ToggleButton />
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import AllGenre from '@/components/Genre.vue'
import ApiService from '@/service/apiServices.js'
import ToggleButton from '@/components/ToggleButton.vue'

const apiService = new ApiService()

export default {
  name: 'GenreView',
  components: {
    AllGenre,
    ToggleButton
  },
  data () {
    return {
      data_genre: null
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav#first {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  font-size: 35px;
  background: rgb(15,11,60);
  background: linear-gradient(90deg, rgba(15,11,60,1) 0%, rgba(117,21,67,1) 50%, rgba(255,111,0,0.9416141456582633) 100%);
}
nav > a {
  color: white;
  text-decoration: none;
}
#menu{
  transition:transform .5s;
  position:absolute;
  width:100%;
  height: auto;
  max-width:100%;
  transform:translateY(-300px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
#menu-button{
  width:50px;
  height:50px;
  overflow:hidden;
  line-height:50px;
  text-align:center;
  font-size:40px;
  cursor:pointer;
  transition:all .5s;
}
#menu-button::after{
  content:'×';
  color: white;
}
#menu-button.close{
  color: white;
}
#menu-button.close::after{
  content:'≡';
}
#menu.show-menu{
  transform:translateY(50px);
  background-color: black;
}
</style>
