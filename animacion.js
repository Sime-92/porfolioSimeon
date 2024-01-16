$(document).ready(function(){
    $('.main-content.wrap_proyectos').hover(
        function() {
            // Al pasar el mouse
            $(this).css('background-image', 'repeating-linear-gradient(to right, transparent, transparent 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0.1) 2px)');
        }, 
        function() {
            // Al retirar el mouse
            $(this).css('background-image', 'repeating-linear-gradient(to right, transparent, transparent 1px, rgba(0, 0, 0, 0.05) 1px, rgba(0, 0, 0, 0.05) 2px)');
        }
    );
});
