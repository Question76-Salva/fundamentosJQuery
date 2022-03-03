//* ===========================
//* === ajax | función ajax ===
//* ===========================

// === leer el contenido de un archivo o url | empleados.txt y lo renderiza/convierte a JSON ===

// parámetros error:
// xhr -> XMLHttpResponse | todo el camino que hizo la función para entregar la info
// status -> estatus de la conexión | 200 (ok) | 404 (error cliente) | 504 (error servidor)
// error -> tipo de error detallado


$(document).ready(function () {
  
  $('#ajax').click(function (e) { 
    e.preventDefault();

    // cls | no pintar registros repetidos
    $('#listaEmpleados').html('');
    
    $.ajax({
      url: 'empleados.json',
      type: 'get',
      dataType: 'json',
      success: function(data) {
        console.log(data);

        // === renderizar los datos en html ===
        $.each(data.empleados, function(i, item) {
          $('#listaEmpleados').html($('#listaEmpleados').html()+`
            <li> ${item.nombre} </li>
            <li> ${item.puesto} </li>
            <li> ${item.edad} </li>
            <br>
          `);
        })
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    })
  });


});