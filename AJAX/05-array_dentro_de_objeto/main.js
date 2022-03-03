//* ========================================
//* === ajax | array dentro de un objeto ===
//* ========================================

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
        $.getJSON("empleados.json", function(data) {
            // imprime un JSON
            console.log(data);
            console.log(data.empleados);
            console.log(data.temporales);

            $.each(data.empleados, function (index, item) { 
                 
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                    <li> ${item.nombre} </li>
                    <li> ${item.puesto} </li>
                    <li> ${item.edad} </li>
                    <br>
                `);
            });

            $.each(data.temporales, function (index, item) { 
                 
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                    <li> ${item.nombre} </li>
                    <li> ${item.puesto} </li>
                    <li> ${item.edad} </li>
                    <br>
                `);
            });
        });
      
    });
});
