// Aquí puedes agregar cualquier funcionalidad JavaScript que necesites
document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo: Agregar animación suave al hacer clic en los enlaces de navegación
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
