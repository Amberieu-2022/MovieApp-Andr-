import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('#menu')
// show or hide
menuButton.addEventListener('click', function () {
  menu.classList.toggle('show-menu')
  menuButton.classList.toggle('close')
})
