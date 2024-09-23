
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider > div');
    const slideWidth = slides[0].clientWidth + 30;
    let index = 0;

    document.querySelector('.left-arrow').addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
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

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function hideCookieBanner() {
    document.querySelector('.wrapper').style.display = 'none';
}
window.onload = function() {
    const cookieConsent = getCookie("cookieConsent");
    if (cookieConsent) {
        hideCookieBanner(); 
        
    }
};

document.getElementById("acceptBtn").onclick = function() {
    setCookie("cookieConsent", "accepted", 365); 
    hideCookieBanner(); 
};
document.getElementById("rejectBtn").onclick = function() {
    setCookie("cookieConsent", "rejected", 365); 
    hideCookieBanner(); 
};
function startIdleTimer() {
    let timeout;
    function resetTimer(){
        clearTimeout(timeout);
        timeout = setTimeout(() => alert ('Você ficou inativo por 5 minutos!'), 5* 60* 1000 );  
    }
     document.addEventListener('mousemove', resetTimer);
        document.addEventListener('keypress', resetTimer);
        resetTimer()
}
