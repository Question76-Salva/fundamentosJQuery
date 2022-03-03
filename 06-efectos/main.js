//* ===============
//* === efectos ===
//* ===============

$(document).ready(function() {

    // acceder/capturar botón "hide" | 4º botón
    $("#subcontenedor button:nth-child(4)").click(function (e) { 
        e.preventDefault();       
             
        $('img').hide(300);
    }); 
    
    // acceder/capturar botón "show" | 5º botón
    $("#subcontenedor button:nth-child(5)").click(function (e) { 
        e.preventDefault();       
               
        $('img').show(300);
    }); 

    // acceder/capturar botón "toggle" | 6º botón
    $("#subcontenedor button:nth-child(6)").click(function (e) { 
        e.preventDefault();       
           
        $('img').toggle(300);
    }); 

    // acceder/capturar botón "fadeIn" | 7º botón
    $("#subcontenedor button:nth-child(7)").click(function (e) { 
        e.preventDefault();       
           
        $('img').fadeIn(300);
    }); 

    // acceder/capturar botón "fadeOut" | 8º botón
    $("#subcontenedor button:nth-child(8)").click(function (e) { 
        e.preventDefault();       
           
        $('img').fadeOut(300);
    }); 

    // acceder/capturar botón "slideDown" | 9º botón
    $("#subcontenedor button:nth-child(9)").click(function (e) { 
        e.preventDefault();       
           
        $('img').slideDown(300);
    }); 

    // acceder/capturar botón "slideUp" | 10º botón
    $("#subcontenedor button:nth-child(10)").click(function (e) { 
        e.preventDefault();       
          
        $('img').slideUp(300);        
    }); 

    // acceder/capturar botón "sideToggle" | 11º botón
    $("#subcontenedor button:nth-child(11)").click(function (e) { 
        e.preventDefault();       
           
        $('img').slideToggle(300);
    }); 

});