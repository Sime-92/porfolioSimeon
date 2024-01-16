$(document).ready(function() {
    var audio = $("#myAudio")[0];
    var playIcon = $(".play-icon");
    var pauseIcon = $(".pause-icon");

    // Inicializa el ícono de pause como oculto
    pauseIcon.hide();

    $("#play").click(function() {
        if (audio.paused) {
            audio.play();
            playIcon.hide(); // Oculta el ícono de play
            pauseIcon.show(); // Muestra el ícono de pause
        } else {
            audio.pause();
            playIcon.show(); // Muestra el ícono de play
            pauseIcon.hide(); // Oculta el ícono de pause
        }
    });

    $("#forward").click(function() {
        audio.currentTime += 10; // Adelanta 10 segundos en la pista de audio
    });

    $("#rewind").click(function() {
        audio.currentTime -= 10; // Retrocede 10 segundos en la pista de audio
    });
});
