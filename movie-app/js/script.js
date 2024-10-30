const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ec225067d5b734095c479ae5d3a79bd1&page=1'

const IMG_PATH = 'https://imagetmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ec225067d5b734095c479ae5d3a79bd1&query="'


const form = document.getEllementById('form')
const search = document.getEllementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
 const res = await fetch(url);
 const data = await res.json();

 console.log(data.results);
}

form.addEventListener('submit', (e) =>{
 e.preventdefault()

 const searchTerm = search.value

 if(searchTerm && searchTerm !== '') {
  getMovies(SEARCH_API + searchTerm)

  search.value = ''
 } else {
  window.location.reload()
 }
})