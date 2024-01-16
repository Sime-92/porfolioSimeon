$(document).ready(function() {
    var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; // Tu texto aquí
    var velocidad = 50; // Velocidad en milisegundos
    var i = 0;

    function maquinaDeEscribir() {
        if (i < texto.length) {
            $('#texto-typewriter').append(texto.charAt(i));
            i++;
            setTimeout(maquinaDeEscribir, velocidad);
        }
    }

    maquinaDeEscribir(); // Inicia la animación
});