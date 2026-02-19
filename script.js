  document.getElementById('CargarContenido').addEventListener('click', function() {
    const fileInput = document.getElementById('SubirArchivo');
    const file = fileInput.files[0];

    const imageInput = document.getElementById('SubirImagen');
    const imageFile = imageInput.files[0];

    const pdfInput = document.getElementById('SubirPdf');
    const pdfFile = pdfInput.files[0];

    // NUEVO: Input de audio
    const audioInput = document.getElementById('SubirAudio');
    const audioFile = audioInput.files[0];

    // NUEVO: Input de video
    const videoInput = document.getElementById('SubirVideo');
    const videoFile = videoInput.files[0];

    // Código existente para archivo de texto
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            console.log(contents); 
            document.getElementById('MostrarContenido').textContent = contents;
        };
        reader.readAsText(file);
    }

    // Código existente para imagen
    if (imageFile) {
        const imageReader = new FileReader();
        imageReader.onload = function(e) {
            const imageUrl = e.target.result;
            console.log(imageUrl); 
            document.getElementById('MostrarImagen').src = imageUrl;
        };
        imageReader.readAsDataURL(imageFile);
    }

    // Código existente para PDF
    if (pdfFile) {
        const pdfUrl = URL.createObjectURL(pdfFile);
        console.log(pdfUrl); 
        document.getElementById('MostrarPdf').src = pdfUrl;
    }

    // NUEVO: Manejo de audio MP3
    if (audioFile) {
        const audioReader = new FileReader();
        audioReader.onload = function(e) {
            const audioUrl = e.target.result;
            console.log('Audio cargado:', audioUrl);
            const audioElement = document.getElementById('MostrarAudio');
            audioElement.src = audioUrl;
            audioElement.load(); // Carga el archivo
        };
        audioReader.readAsDataURL(audioFile);
    }

    // NUEVO: Manejo de video MP4
    if (videoFile) {
        const videoReader = new FileReader();
        videoReader.onload = function(e) {
            const videoUrl = e.target.result;
            console.log('Video cargado:', videoUrl);
            const videoElement = document.getElementById('MostrarVideo');
            videoElement.src = videoUrl;
            videoElement.load(); // Carga el archivo
        };
        videoReader.readAsDataURL(videoFile);
    }

    // Validación: al menos un archivo debe estar seleccionado
    if (!file && !imageFile && !pdfFile && !audioFile && !videoFile) {
        alert('Por favor, selecciona al menos un archivo.');
    }
});