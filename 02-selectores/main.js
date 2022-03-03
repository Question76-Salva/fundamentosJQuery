//* ==================
//* === selectores ===
//* ==================

$(document).ready(function() {

    // === captura el botón y muestra texto del botón por consola ===
    // let varBoton = $('button').html();
    // console.log(varBoton);

    // === cambiar el texto del botón | desde etiqueta 'button' ===
    // $('button').html('Cambiado desde JQuery');

    // === cambiar el texto del botón | desde la clase 'btn' ===
    // $('.btn').html('Cambiado desde la clase');

    // === cambiar el texto del botón | desde el id 'boton' ===
    // $('#boton').html('Cambiado desde el id');

    // === cambiar varios elementos | del tipo 'button' ===
    // $('button').html('Cambiado desde etiqueta');

    // === cambiar botón que está dentro de 'subcontenedor' ===
    // $('#subcontenedor button').html('Botón desde subcontenedor');

    // === cambiar el primer botón que encuentre y cambiar el texto ===
    // $('button:first').html('primero');

    // === cambiar el último botón y cambiar el texto ===
    $('button:last').html('último');
});