document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const submenu = this.querySelector('.submenu');
            const isVisible = submenu.style.display === 'block';
            submenu.style.display = isVisible ? 'none' : 'block';
        });
    });
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu-item')) {
            menuItems.forEach(item => {
                const submenu = item.querySelector('.submenu');
                submenu.style.display = 'none';
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider > div');
    const slideWidth = slides[0].clientWidth + 30;
    let index = 0;

    document.querySelector('.left-arrow').addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }); document.querySelector('.right-arrow').addEventListener('click', () => {
        index = (index < slides.length - 1) ? index + 1 : 0;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});
document.addEventListener('DOMContentLoaded', function() {
alert('Bem-vindo(a) ao site da Biblioteca Aurora! Procure os livros que mais lhe interessa e divirta-se.');
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('anuncio');
    const closeButton = document.querySelector('#anuncio .close');
    window.onload = function() {
        modal.style.display = 'block';
    }
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});
var modal = document.getElementById('anuncio');
var btn = document.getElementById('open-modal');
var span = document.getElementsByClassName('close')[0];
var form = document.getElementById('signup-form');
