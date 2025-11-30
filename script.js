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


function iniciarExperiencia() {
    const audio = document.getElementById('audio');
    
   
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            
            mostrarSeccion('seccion1');
        }).catch(error => {
            
            mostrarSeccion('seccion1');
            console.error('La reproducción de audio fue bloqueada:', error);
            alert("No pude reproducir la música. Por favor, activa los permisos de sonido de tu navegador.");
        });
    }
}

function finalizarExperiencia() {
    const audio = document.getElementById('audio');
    audio.pause(); 
    audio.currentTime = 0; 
    
    
    alert("¡ Espero que esta sorpresa te haya llenado de alegría. ♥");
}
