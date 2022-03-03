//* ===============
//* === eventos ===
//* ===============

$(document).ready(function() {

    // acceder/capturar botón "cambiar"
    $("#boton").click(function(e) {
        e.preventDefault();

        // cambiar la imagen por otra
        $('img').attr('src', '../img/logo2.png');
    });

    // acceder/capturar botón "pequeño" | 1º botón
    $("#subcontenedor button:nth-child(1)").click(function(e) {
        e.preventDefault();

        // reducir la imagen de tamaño
        $('img').attr('width', '300px');
    });

    // acceder/capturar botón "mover" | 2º botón
    $("#subcontenedor button:nth-child(2)").click(function(e) {
        e.preventDefault();

        // mover la imagen | css get
        let margen =  $('img').css('margin-left');
        margen = parseInt(margen.replace('px', ''));
        margen += 30;
      
        // css | set
        $('img').css('margin-left', margen + 'px');        
    });

    // acceder/capturar botón "desaparecer" | 3º botón
    $("#subcontenedor button:nth-child(3)").click(function (e) { 
        e.preventDefault();

        //$('img').hide();  
        
        // para bootstrap
        $('img').toggleClass('d-none');
    });

});