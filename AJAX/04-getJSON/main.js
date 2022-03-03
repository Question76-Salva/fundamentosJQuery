//* ================================
//* === ajax | función "getJSON" ===
//* ================================

// === leer el contenido de un archivo o url | empleados.txt y lo renderiza/convierte a JSON ===

// parámetros get:
// data -> contenido del archivo/url
// textStatus -> estado del envio | success - failed
// jqXHR -> cual fué el requerimiento total | devuelve porque no llega

$(document).ready(function () {
    
    // capturar botón "leer"
    $('#leerGetJSON').click(function (e) { 
        e.preventDefault();

        // limpiar valor | para que no se sobreescriba
        $('#listaEmpleados').html();
        
        // ajax
        $.getJSON("empleados.txt", function(data) {
            // imprime un JSON
            console.log(data);
        });

        $.get("empleados.txt", function(data) {
            // convertir de txt a JSON
            data = JSON.parse(data);
            // imprime un JSON
            console.log(data);
        })


    });
});
