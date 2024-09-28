const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav')
const ul = document.querySelector('ul')

toggle.addEventListener('click', () => {
 nav.classList.toggle('active')
 
 if (nav.classList.contains('active')){
  ul.style.display = 'flex'
 }else {  
  setTimeout(() => {
   ul.style.display = 'none'
  }, 600)
 }
})