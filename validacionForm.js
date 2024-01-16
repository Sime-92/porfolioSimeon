document.querySelector('#contenido form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var motivo = document.getElementById('motivo').value;

    if (!nombre || !apellido || !correo || !motivo) {
        alert('Por favor, completa todos los campos requeridos.');
        event.preventDefault();
    }
});
