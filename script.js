// Función para cambiar de sección
function mostrarSeccion(idSeccion) {
    const seccionActiva = document.querySelector('.seccion.activa');
    if (seccionActiva) {
        seccionActiva.classList.remove('activa');
    }
    const seccionSiguiente = document.getElementById(idSeccion);
    if (seccionSiguiente) {
        seccionSiguiente.classList.add('activa');
    }
}

// Función para iniciar toda la experiencia (llamada por el botón "Empezar")
function iniciarExperiencia() {
    const audio = document.getElementById('audio');
    
    // Intenta reproducir el audio
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Si el audio se reproduce, muestra la sección del poema
            mostrarSeccion('seccion1');
        }).catch(error => {
            // Si el navegador lo bloquea, muestra el poema de todos modos, pero sin sonido
            mostrarSeccion('seccion1');
            console.error('La reproducción de audio fue bloqueada:', error);
            alert("No pude reproducir la música. Por favor, activa los permisos de sonido de tu navegador.");
        });
    }
}

function finalizarExperiencia() {
    const audio = document.getElementById('audio');
    audio.pause(); // Detiene la reproducción
    audio.currentTime = 0; // Regresa la canción al inicio por si quiere reproducirla de nuevo
    
    // Opcional: Podrías mostrar un mensaje de despedida
    alert("¡ Espero que esta sorpresa te haya llenado de alegría. ♥");
}