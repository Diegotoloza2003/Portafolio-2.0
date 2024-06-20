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