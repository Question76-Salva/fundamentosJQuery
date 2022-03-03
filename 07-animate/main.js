//* ===============
//* === animate ===
//* ===============

$(document).ready(function() {

    // acceder/capturar botón "animate" | 12º botón
    $("#subcontenedor button:nth-child(1)").click(function(e) {
        e.preventDefault();
        $('img').animate({
            'margin-left' : '+=100px',
            'opacity' : '0.5',
            'width' : '-=150px'
        }, 1000,
        function() {
            $('img').animate({
                'margin-left' : '-=100px',
                'opacity' : '1',
                'width' : '+=150px'
            });
        }
        );
    });

    $('#subir').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 1000);
    });

    $('#bajar').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop : $(document).height() - $(window).height()}, 1000);
    });

});