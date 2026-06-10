document.addEventListener('DOMContentLoaded', () => {
    // ---- EFECTO MULTIMEDIA ----
    const imagenes = document.querySelectorAll('.classified-img');
    
    imagenes.forEach(img => {
        img.addEventListener('click', () => {
            alert('Desencriptando archivo visual... Nivel de autorización verificado.');
            // Quita el filtro de blanco y negro y le da un brillo de neón
            img.style.filter = 'grayscale(0%) sepia(0%) contrast(100%)';
            img.style.boxShadow = '0 0 15px #66fcf1';
            img.style.border = '2px solid #66fcf1';
        });
    });
    // ---------------------------

    const btnClasificar = document.getElementById('btnClasificar');
    const btnReiniciar = document.getElementById('btnReiniciar');
    const resultadoSeccion = document.getElementById('resultadoSeccion');
    const resultadoTexto = document.getElementById('resultadoTexto');

    btnClasificar.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const lugar = document.getElementById('lugar').value.trim();
        const testigos = parseInt(document.getElementById('testigos').value);
        const descripcion = document.getElementById('descripcion').value.trim();

        if(!nombre || !lugar || isNaN(testigos) || !descripcion) {
            alert("Acceso denegado: Por favor, completa todos los campos del reporte antes de clasificar.");
            return; 
        }

        let puntaje = 0;

        const video = document.getElementById('video').value;
        if(video === 'si') puntaje += 3;

        const imagen = document.getElementById('imagen').value;
        if(imagen === 'si') puntaje += 2;

        const radar = document.getElementById('radar').value;
        if(radar === 'si') puntaje += 4;

        if(testigos > 3) puntaje += 2;

        const explicacion = document.getElementById('explicacion').value;
        if(explicacion === 'no') puntaje += 3;

        let clasificacion = '';
        let claseCSS = '';

        if(puntaje >= 0 && puntaje <= 4) {
            clasificacion = 'Evidencia Débil';
            claseCSS = 'evidencia-debil';
        } else if (puntaje >= 5 && puntaje <= 8) {
            clasificacion = 'Evidencia Moderada';
            claseCSS = 'evidencia-moderada';
        } else {
            clasificacion = 'Evidencia Fuerte';
            claseCSS = 'evidencia-fuerte';
        }

        resultadoTexto.textContent = `Nivel: ${clasificacion}`;
        resultadoSeccion.className = `glass-panel ${claseCSS}`; 
    });

    btnReiniciar.addEventListener('click', () => {
        resultadoSeccion.className = 'hidden';
        
        // Opcional: Volver a encriptar las imágenes al reiniciar
        imagenes.forEach(img => {
            img.style.filter = 'grayscale(100%) sepia(50%) contrast(120%)';
            img.style.boxShadow = 'none';
            img.style.border = 'none';
        });
    });
});
