//* ========================================================
//* === ajax | función "get" | array de objetos con JSON ===
//* ========================================================

// === leer el contenido de un archivo o url | empleados.json ===

// parámetros get:
// data -> contenido del archivo/url
// textStatus -> estado del envio | success - failed
// jqXHR -> cual fué el requerimiento total | devuelve porque no llega

$(document).ready(function () {
    
    // capturar botón "leer"
    $('#leerArrayEmpleados').click(function (e) { 
        e.preventDefault();

        // limpiar valor | para que no se sobreescriba
        $('#listaEmpleados').html();
        
        // ajax
        $.get("empleados.json", function(data) {
            
            $.each(data, function (index, item) { 
                 
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
