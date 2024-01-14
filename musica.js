
$(document).ready(function() {
    var audio = $("#myAudio")[0];
    var stopButton = $("#stop");

    // Ocultar inicialmente el botón de stop
    stopButton.hide();

    $("#play").click(function() {
        if (audio.paused) {
            audio.play();
            $(this).text('⏸️'); // Cambia el icono a pausa
            stopButton.show(); // Muestra el botón de stop
        } else {
            audio.pause();
            $(this).text('▶️'); // Cambia el icono a play
            stopButton.hide(); // Oculta el botón de stop si la música se detiene
        }
    });

    $("#stop").click(function() {
        audio.pause();
        audio.currentTime = 0;
        $("#play").text('▶️'); // Reinicia el icono de play
        stopButton.hide(); // Oculta el botón de stop
    });

    $("#forward").click(function() {
        audio.currentTime += 10; // Adelanta 10 segundos
    });

    $("#rewind").click(function() {
        audio.currentTime -= 10; // Retrocede 10 segundos
    });
});

