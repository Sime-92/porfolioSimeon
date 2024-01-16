<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $motivo = $_POST['motivo'];

    $para = 'alupar9905@ieselcaminas.org'; 
    $asunto = 'Nuevo mensaje de tu portafolio';

    $mensaje = "Nombre: $nombre\nApellido: $apellido\nTeléfono: $telefono\nCorreo: $correo\n\n$motivo";
    $headers = 'From: ' . $correo . "\r\n";

    if(mail($para, $asunto, $mensaje, $headers)){
        echo "Mensaje enviado con éxito.";
    } else{
        echo "Error al enviar el mensaje.";
    }
}
?>
