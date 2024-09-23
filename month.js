let currentIndex = 0;
const slides = document.querySelectorAll('#month .carousel img');
const totalSlides = slides.length;
function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}
setInterval(nextSlide, 3000);
