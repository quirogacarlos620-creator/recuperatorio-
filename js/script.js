document.addEventListener('DOMContentLoaded', () => {
    const btnClasificar = document.getElementById('btnClasificar');
    const btnReiniciar = document.getElementById('btnReiniciar');
    const resultadoSeccion = document.getElementById('resultadoSeccion');
    const resultadoTexto = document.getElementById('resultadoTexto');

    btnClasificar.addEventListener('click', () => {
        // 1. Validar campos (Obligatorio en la rúbrica)
        const nombre = document.getElementById('nombre').value.trim();
        const lugar = document.getElementById('lugar').value.trim();
        const testigos = parseInt(document.getElementById('testigos').value);
        const descripcion = document.getElementById('descripcion').value.trim();

        if(!nombre || !lugar || isNaN(testigos) || !descripcion) {
            alert("Acceso denegado: Por favor, completa todos los campos del reporte antes de clasificar.");
            return; // Detiene la ejecución si falta algo
        }

        // 2. Calcular puntaje
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

        // 3. Determinar la clasificación y el color
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

        // 4. Mostrar en el DOM (innerHTML/textContent y cambio de estilos)
        resultadoTexto.textContent = `Puntaje de Confiabilidad: ${puntaje} pts - Nivel: ${clasificacion}`;
        
        // Aplica el efecto visual según el resultado y remueve el 'hidden'
        resultadoSeccion.className = `glass-panel ${claseCSS}`; 
    });

    btnReiniciar.addEventListener('click', () => {
        // Ocultar sección de resultados cuando se limpia el formulario
        resultadoSeccion.className = 'hidden';
    });
});
