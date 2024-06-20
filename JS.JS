const habilidadess = document.getElementById('habilidadess');
let scrollAmount = 0;
let scrollSpeed = 2; // Velocidad de desplazamiento, ajustable

function scrollHabilidades() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= habilidadess.scrollWidth - habilidadess.clientWidth) {
        scrollAmount = 0; // Reiniciar desplazamiento al final
    }
    habilidadess.scrollLeft = scrollAmount;
    requestAnimationFrame(scrollHabilidades);
}

scrollHabilidades();

// Funcionalidad de modo oscuro/claro
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
});