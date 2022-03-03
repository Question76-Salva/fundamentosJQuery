//* ============================
//* === ajax | función "get" ===
//* ============================

// === leer el contenido de un archivo o url | archivo.txt ===

// parámetros get:
// data -> contenido del archivo/url
// textStatus -> estado del envio | success - failed
// jqXHR -> cual fué el requerimiento total | devuelve porque no llega

$(document).ready(function () {
    
    // capturar botón "leer"
    $('#leer').click(function (e) { 
        e.preventDefault();
        
        // ajax
        $.get("archivo.txt", function(data, textStatus, jqXHR) {
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
});
