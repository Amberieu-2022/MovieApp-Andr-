<template>
  <div class="serie">
    <router-link :to ="{name: 'InfosTv', params: {id:id}}">
      <img :src="'https://image.tmdb.org/t/p/w300/' + poster" alt="image" class="image"/>
    </router-link>
    <div class="middle">
      <div class="text"><h1>{{ title }}</h1></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllSerie',
  props: ['title', 'poster', 'id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  background-color: rgb(2,0,26,0.7);
  color: white;
  font-size: 10px;
  padding: 5px 5px;
}
p {
  font-size: 0.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 10px 5px;
}
img {
  width: 100%;
}
.serie {
  width: 18%;
  margin: 10px;
  position: relative;
}
.middle {
  width: 100%;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.serie:hover .image {
  opacity: 0.3;
}
.serie:hover .middle {
  opacity: 1;
}
</style>
