//* =======================================================
//* === ajax | funciones callback -> done, fail, alawys ===
//* =======================================================

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
                $('#res').parent().removeClass('d-none');
                $('#res').html(data);
            },
            
        ).done(function () {
            // cuando se ejecute correctamente la petición | haz lo siguiente
            $('#estado').html("Exito");
            $('#estado').addClass('alert-success');
            $('#estado').removeClass('d-none');
        }).fail(function () {
            // cuando algo falle en la petición | haz lo siguiente
            $('#estado').html("Fallo");
            $('#estado').addClass('alert-danger');
            $('#estado').removeClass('d-none');
        }).always(function () {
            // cuando termina la petición (con éxito o fracaso) | haz lo siguiente
            console.log("finalizo");
        });
    });   
});
