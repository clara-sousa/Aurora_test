document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider > div');
    const slideWidth = slides[0].clientWidth + 30; // Inclui o espaçamento dos lados
    let index = 0;

    document.querySelector('.left-arrow').addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        index = (index < slides.length - 1) ? index + 1 : 0;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});
