//* ===========================================
//* === ajax | Ajax envio de datos vía POST ===
//* ===========================================

$(document).ready(function () {
    
    $('form').submit(function (e) { 
        e.preventDefault();
        
        // === capturar valores de los inputs del formulario | por los ID ===
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();

        // === enviar los datos via post ===
        $.post("http://localhost/JQuery/AJAX/convertir.php", 
        {'nombre':nombre, 'puesto':puesto},
            function (data, textStatus, jqXHR) {
                $('#res').html(data);
            },
            
        );
    }); 
    
   
});
