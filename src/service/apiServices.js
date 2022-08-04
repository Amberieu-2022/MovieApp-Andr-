export default class ApiService {
  getMovies (page) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?language=fr-FR&api_key=9c74e6793b2023e0e3a817a26f8db849&page=${page}`)
  }

  getInfosM (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9c74e6793b2023e0e3a817a26f8db849&language=en-FR`)
  }

  getSearch (search) {
    return fetch(`https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=9c74e6793b2023e0e3a817a26f8db849&query=${search}`)
  }

  getTv (page) {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=9c74e6793b2023e0e3a817a26f8db849&page=${page}`)
  }

  getInfosTv (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=9c74e6793b2023e0e3a817a26f8db849&language=en-FR`)
  }

  getGenre () {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9c74e6793b2023e0e3a817a26f8db849&language=en-FR')
  }
}
