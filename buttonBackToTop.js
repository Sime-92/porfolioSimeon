$(document).ready(function(){
    // Ocultar el botón al inicio
    $("#back-to-top").hide();

    // Mostrar u ocultar el botón al hacer scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Al hacer clic, animar el scroll hacia arriba
    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800); // 800 ms para el efecto de animación
        return false;
    });
});
