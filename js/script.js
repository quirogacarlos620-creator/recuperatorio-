document.addEventListener('DOMContentLoaded', () => {
    const btnClasificar = document.getElementById('btnClasificar');
    const btnReiniciar = document.getElementById('btnReiniciar');
    const resultadoSeccion = document.getElementById('resultadoSeccion');
    const resultadoTexto = document.getElementById('resultadoTexto');

    btnClasificar.addEventListener('click', () => {
        // 1. Capturar datos
        const nombre = document.getElementById('nombre').value.trim();
        const lugar = document.getElementById('lugar').value.trim();
        const testigos = parseInt(document.getElementById('testigos').value);
        const descripcion = document.getElementById('descripcion').value.trim();

        // 2. Validación obligatoria [cite: 60]
        if(!nombre || !lugar || isNaN(testigos) || !descripcion) {
            alert("Acceso denegado: Por favor, completa todos los campos del reporte.");
            return;
        }

        // 3. Cálculo de puntaje interno [cite: 20, 34]
        let puntaje = 0;
        if(document.getElementById('video').value === 'si') puntaje += 3;
        if(document.getElementById('imagen').value === 'si') puntaje += 2;
        if(document.getElementById('radar').value === 'si') puntaje += 4;
        if(testigos > 3) puntaje += 2;
        if(document.getElementById('explicacion').value === 'no') puntaje += 3;

        // 4. Clasificación según el documento 
        let clasificacion = '';
        let claseCSS = '';

        if(puntaje <= 4) {
            clasificacion = 'Evidencia Débil';
            claseCSS = 'evidencia-debil';
        } else if (puntaje <= 8) {
            clasificacion = 'Evidencia Moderada';
            claseCSS = 'evidencia-moderada';
        } else {
            clasificacion = 'Evidencia Fuerte';
            claseCSS = 'evidencia-fuerte';
        }

        // 5. Mostrar solo el resultado final [cite: 21, 38, 41]
        resultadoTexto.textContent = `Resultado del Análisis: ${clasificacion}`;
        
        // Aplica el estilo y hace visible la sección [cite: 39]
        resultadoSeccion.className = `glass-panel ${claseCSS}`; 
        resultadoSeccion.style.display = 'block';
    });

    btnReiniciar.addEventListener('click', () => {
        resultadoSeccion.style.display = 'none';
    });
});
