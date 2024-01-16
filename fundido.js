$(document).ready(function() {
    $('.navbar-brand').click(function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace
        $('body').fadeOut(500, function() {
            $(this).fadeIn(500); // Efecto de fundido
        });
    });
});
