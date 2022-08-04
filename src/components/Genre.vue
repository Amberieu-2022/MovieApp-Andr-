<template>
  <div class="Genre">
    <router-link :to ="{name: 'Genre', params: {id:id}}"></router-link>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AllGenre',
  props: ['id', 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 15px;
  line-height: 30px;
  margin: 5px;
  padding: 5px;
  color: white;
  border-radius: 10px;
}
h1:hover {
  background-color: white;
  line-height: 30px;
  margin: 5px;
  padding: 5px;
  color: rgba(126,16,111,1);
  border-radius: 5px;
}
</style>
