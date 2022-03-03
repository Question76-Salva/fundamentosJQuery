//* =====================================
//* === ajax | función "get" con JSON ===
//* =====================================

// === leer el contenido de un archivo o url | empleados.json ===

// parámetros get:
// data -> contenido del archivo/url
// textStatus -> estado del envio | success - failed
// jqXHR -> cual fué el requerimiento total | devuelve porque no llega

$(document).ready(function () {
    
    // capturar botón "leer"
    $('#leerEmpleado').click(function (e) { 
        e.preventDefault();
        
        // ajax
        $.get("empleados.json", function(data) {
            // console.log(data);            
            // console.log(data.nombre);
            // console.log(data.puesto);

            $('#datosEmpleado').html(`
                Nombre: ${data.nombre} <br> 
                Puesto: ${data.puesto} <br> 
                Edad: ${data.edad}
            `);
        });
    });
});
