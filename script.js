var sorteioDisplay = document.getElementById("sorteio");
var sortearBotao = document.getElementById("sortearBotao");
var arrayNomes = [ "House","Jujutsu", "TheBoys", "Aot"];



// script.js

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
    
}

sortearBotao.addEventListener("click", function() {
    var numeroAleatorio = Math.floor(Math.random() * 4) + 0; 
    sorteioDisplay.textContent =  arrayNomes[numeroAleatorio];
    showSlide(currentSlide=numeroAleatorio);
    
});



