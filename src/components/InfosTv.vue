<template>
  <div class="home">
    <img :src="'https://image.tmdb.org/t/p/w300/' + data.poster_path" alt=""/>
    <div class="infos">
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfosTv',
  props: ['title', 'poster', 'id']
}
</script>