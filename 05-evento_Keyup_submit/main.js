//* ================================
//* === eventos | keyup y submit ===
//* ================================

$(document).ready(function() {

    // acceder/capturar input #texto
    $('#texto').keyup(function (e) { 
        e.preventDefault();
        $('#saludo').html("Hola " + $('#texto').val());
    });
    
    // evitar que al dar ENTER se envie el input
    $('form').submit(function (e) { 
        e.preventDefault();
        
    });

});