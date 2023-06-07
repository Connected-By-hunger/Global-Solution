
alt="Gráfico sobre fome"
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

var myCarousel = document.getElementById('carouselExampleDark')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Tempo em milissegundos entre cada slide
  wrap: true // O carrossel continua a rodar indefinidamente
})