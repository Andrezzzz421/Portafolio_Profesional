
document.addEventListener("DOMContentLoaded", function() {
    
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {  // Puedes ajustar este valor según prefieras
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

document.getElementById('language-toggle').addEventListener('click', function() {
    const isEnglish = this.textContent === 'English';
    const elementsEs = document.querySelectorAll('.es');
    const elementsEn = document.querySelectorAll('.en');

    if (isEnglish) {
        elementsEs.forEach(el => el.style.display = 'none');
        elementsEn.forEach(el => el.style.display = 'block');
        this.textContent = 'Español';
    } else {
        elementsEs.forEach(el => el.style.display = 'block');
        elementsEn.forEach(el => el.style.display = 'none');
        this.textContent = 'English';
    }
});
