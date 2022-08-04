import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfosView from '../views/InfosView.vue'
import SearchView from '../views/SearchView.vue'
import SeriesView from '../views/SeriesView.vue'
import InfosTvView from '../views/InfosTvView.vue'
import GenreView from '../views/GenreView.vue'
import PageGenreView from '../views/PageGenreView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Infos/:id',
    name: 'Infos',
    component: InfosView
  },
  {
    path: '/search/',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/Serie/',
    name: 'Series',
    component: SeriesView
  },
  {
    path: '/InfosTv/:id',
    name: 'InfosTv',
    component: InfosTvView
  },
  {
    path: '/Genre/',
    name: 'Genre',
    component: GenreView
  },
  {
    path: '/PageGenre/:id',
    name: 'PageGenre',
    component: PageGenreView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
