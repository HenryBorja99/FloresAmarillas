function mostrarSeccion(idSeccion) {
    // 1. Ocultar la sección actualmente visible
    const seccionActiva = document.querySelector('.seccion.activa');
    if (seccionActiva) {
        seccionActiva.classList.remove('activa');
    }

    // 2. Mostrar la nueva sección
    const seccionSiguiente = document.getElementById(idSeccion);
    if (seccionSiguiente) {
        seccionSiguiente.classList.add('activa');
    }
}