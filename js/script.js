
window.addEventListener('load', init);

function init() {

    // HEADER BACKGROUND ANIMATION

    const starCount = 1000; // Número total de estrellas
    const animatedBackground = document.getElementById('animated-background');

    function createStar(size, duration) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 2000}px`; // Colocar estrellas por encima de la vista para animación
        star.style.animationDuration = `${duration}s`;
        return star;
    }

    for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 3 + 1; // Tamaño aleatorio de la estrella
        const duration = Math.random() * 100 + 50; // Duración aleatoria de la animación
        const star = createStar(size, duration);
        animatedBackground.appendChild(star);
    }

    // HOVER SOCIAL ICONS

    let socialIcons = ['instagram', 'facebook', 'tiktok', 'youtube', 'pinterest', 'whatsapp'];
    socialIcons.forEach(socialIcon => {
        let element = document.getElementById(`icon-${socialIcon}`);
        
        element.addEventListener('mouseover', () => {
            element.src = `img/social_icons_hover/${socialIcon}.svg`;
        });

        element.addEventListener('mouseout', () => {
            element.src = `img/social_icons/${socialIcon}.svg`;
        });
    });

    // SMOOTH SCROLL

    $('a[href^="#"]').click(function() {
        let destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 500);
        return false;
    });

    // PRINT DATE

    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("date").innerHTML = year;

}

// STICKY HEADER

window.addEventListener('scroll', function() {
    let nav = document.getElementById('nav');
    let headerHeight = document.querySelector('header').offsetHeight;
    let scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > headerHeight - nav.offsetHeight) {
        nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }
});

// BTN TOP

window.addEventListener('scroll', function() {
    var btnTop = document.getElementById('btn-top');
    if (window.scrollY > 50) {
        btnTop.classList.add('btn-top-show');
    } else {
        btnTop.classList.remove('btn-top-show');
    }
});
