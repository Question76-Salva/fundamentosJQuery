//* ======================
//* === ajax | filtrar ===
//* ======================

// === leer el contenido de un archivo o url | empleados.txt y lo renderiza/convierte a JSON ===

// parámetros get:
// data -> contenido del archivo/url
// textStatus -> estado del envio | success - failed
// jqXHR -> cual fué el requerimiento total | devuelve porque no llega

$(document).ready(function () {
  // === variable global | guardar todos los empleados de nuestro JSON ===
  let empleados;

  // ajax
  $.getJSON("empleados.json", function (data) {
    // === cargar en la variable global todos los datos (empleados) del json ===
    empleados = data.empleados;
  });

  $("#nombre").keyup(function (e) {
    e.preventDefault();

    // limpiar valor | para que no se sobreescriba
    $("#listaEmpleados").html('');

    // capturar el valor del input
    let nombre = $("#nombre").val();

    $.each(empleados, function (index, item) {
      // === comparar nombre ===
      if (item.nombre.toLowerCase().indexOf(nombre) !== -1) {
        $("#listaEmpleados").html(
          $("#listaEmpleados").html() +
            `                                      
            <li> ${item.nombre} - ${item.puesto} </li>
                    
            `
        );
      }
    });
  });
});
