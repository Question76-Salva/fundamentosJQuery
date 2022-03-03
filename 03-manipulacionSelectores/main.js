//* ==================================
//* === manipulación de selectores ===
//* ==================================

$(document).ready(function() {

    // añadir una clase a un elemento
    $("#boton").addClass('btn-danger');

    // quitar una clase a un elemento
    $("#boton").removeClass('btn-primary');

    // append -> agregar elemento al final de la etiqueta 
    $("#subcontenedor").append('<button type="button" class="btn btn-danger">agregado con append</button>');

    // prepend -> agregar elemento al principio de la etiqueta 
    $("#subcontenedor").prepend('<button type="button" class="btn btn-warning">agregado con preppend</button>');

    // manipular css
    $('#boton').css('color', 'blue');
    $('#boton').css('background-color', 'yellow');

    //$("#subcontenedor").remove();

    // ocultar
    $("#subcontenedor").hide();

    // cambiar una imagen por otra
    $('img').attr('src', '../img/logo2.png');

    // hacer la imagen más pequeña | redimensionar
    $('img').attr('width', '300px');


});