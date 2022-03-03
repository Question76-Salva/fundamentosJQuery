//* ===========================
//* === ajax | Ajax con PHP ===
//* ===========================

$(document).ready(function () {
    
    $('#convertir').click(function (e) { 
        e.preventDefault();

        // capturar valores 
        let operacion = $('#operacion').val();
        let texto = $('#texto').val();

        // objeto con los datos
        let datos = {
            'operacion' : operacion,
            'texto' : texto
        }

        $.get("http://localhost/JQuery/AJAX/convertir.php", 
        datos,
        function(data) {
            console.log(data);
            // renderizar en html
            $('#listaEmpleados').html(data);
        });
        
    });
    
    
   
});
