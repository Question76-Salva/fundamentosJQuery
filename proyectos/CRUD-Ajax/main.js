//* ====================================
//* === crud | php mysql jquery ajax ===
//* ===============s=====================

$(document).ready(function () {
    
    // ========================
    // === listar empleados ===
    // ========================
    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();

        // === limpiar html | no renderizar valores repetidos ===
        $('#listaEmpleados').html('');

        // === traer los registros desde el servidor php ===
        $.getJSON("http://localhost/JQuery/proyectos/CRUD-Ajax/empleados.php", 
        {"accion" : "leer"},
            function (data) {
                //console.log(data);
                // renderizar los registros en el html
                // cuando le damos click al icono del lapiz (editar) capturamos los datos
                $.each(data, function (index, item) { 
                    $('#listaEmpleados').html($('#listaEmpleados').html()+`
                        <li><i class="fa fa-pencil-square" aria-hidden="true"
                        data-id='${item.id}'  
                        data-nombre='${item.nombre}'  
                        data-puesto='${item.puesto}'  
                        data-edad='${item.edad}'                         
                        ></i>
                        <i class="fa fa-trash" aria-hidden="true" data-id='${item.id}'></i>
                        Nombre: ${item.nombre} -- Puesto: ${item.puesto} -- Edad: ${item.edad} </li>
                    `);
                });
            }
        );
    });

    // =======================
    // === crear empleados ===
    // =======================
    $('#crearEmpleado').click(function (e) { 
        e.preventDefault();
        
        // === capturar los datos de los inputs ===
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        let edad = $('#edad').val();

        // === al hacer click en botón "Crear" enviar los datos via POST ===
        $.post('http://localhost/JQuery/proyectos/CRUD-Ajax/empleados.php',
        {"accion" : "insertar", "nombre" : nombre, "puesto" : puesto, "edad" : edad},
        function(data) {
            // se manda llamar función callback que retorna el resultado
            //console.log(data);
            // limpiar inputs del formulario una vez creado el empleado
            if(data === "1") {
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');
                
                // mostrar mensaje
                $('#mensajes').removeClass('d-none');
                $('#mensajes').addClass('alert-success');
                $('#mensajes').html('Empleado creado correctamente');

                setTimeout(function() { 
                    $('#mensajes').addClass('d-none');
                    // === fuerza click para redireccionar al index | lista de empleados
                    $('#lista-tab').click();

                    // === fuerza click en leerEmpleados para refrescar los empleados después de crear ==
                    $('#leerEmpleados').click();
                }, 2000);

                

            } else {
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');

                // mostrar mensaje
                $('#mensajes').removeClass('d-none');
                $('#mensajes').addClass('alert-danger');
                $('#mensajes').html('Error al crear el empleado');

                setTimeout(function() { 
                    $('#mensajes').addClass('d-none');
                }, 2000);
            }
        })

    });

    // ========================
    // === editar empleados ===
    // ========================
    $(document).on('click', '.fa-pencil-square', function() {

        // obtener id del elemento que se haga click en el lapiz (editar) | capturar id
        //console.log($(this).data('id'));

        // al hacer click en el icono del lapiz de algún empleado que se muestre sólo botón Editar
        // (ocultar botón Editar | con d-none)
        $('#crearEmpleado').addClass('d-none');
        // va a pasar, de forma inversa a Editar
        $('#editarEmpleado').removeClass('d-none');
        // cambiar el nombre de la pestaña
        $('#datos-tab').html('Editar');
        // forzar click | redireccionar
        $('#datos-tab').click();

        // asignar los valores a los inputs | para editar los campos del formulario | EDITAR
        $('#id').val($(this).data('id'));
        $('#nombre').val($(this).data('nombre'));
        $('#puesto').val($(this).data('puesto'));
        $('#edad').val($(this).data('edad'));
        
    });

    $('#editarEmpleado').click(function (e) { 
        e.preventDefault();
        
        // capturar valores (texto) de los inputs
        let id = $('#id').val();
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        let edad = $('#edad').val();

        // mandar los datos via POST al servidor PHP
        $.post('http://localhost/JQuery/proyectos/CRUD-Ajax/empleados.php',
        {"accion" : "editar", "nombre" : nombre, "puesto" : puesto, "edad" : edad, "id" : id}, 
        function(data) {

            // se manda llamar función callback que retorna el resultado
            //console.log(data);
            // limpiar inputs del formulario una vez creado el empleado
            if(data === "1") {
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');
                
                // mostrar mensaje
                $('#mensajes').removeClass('d-none');
                $('#mensajes').addClass('alert-success');
                $('#mensajes').html('Empleado editado correctamente');

                setTimeout(function() { 
                    $('#mensajes').addClass('d-none');
                    // === fuerza click para redireccionar al index | lista de empleados
                    $('#lista-tab').click();
                    
                    // pasar los nuevos valores actualizados a lista y refrescar los elementos
                    // forzar los clicks para refrescar automáticamente
                    $('#lista-tab').click();
                    $('#leerEmpleados').click();

                    // mostrar el botón de "Crear" y ocultar botón de "Editar"
                    $('#crearEmpleado').removeClass('d-none');
                    $('#editarEmpleado').addClass('d-none');
                }, 2000);                

            } else {
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');

                // mostrar mensaje
                $('#mensajes').removeClass('d-none');
                $('#mensajes').addClass('alert-danger');
                $('#mensajes').html('Error al editar el empleado');

                setTimeout(function() { 
                    $('#mensajes').addClass('d-none');
                }, 2000);
            }
        });    


    });

    // ==========================
    // === eliminar empleados ===
    // ==========================
    $(document).on('click', '.fa-trash', function() {

        // capturar el ID del elemento al hacer click en el icono de la basura | ELIMINAR
        let id = $(this).data('id');
        //console.log(id);

        // capturar elemento padre del icono de la basura | tenemos que borrar el <li> del registro
        const linea = $(this).parent();

        // mandar los datos via POST al servidor PHP
        $.post('http://localhost/JQuery/proyectos/CRUD-Ajax/empleados.php', 
        {"accion" : "borrar", "id" : id},
            function (data) {
                //console.log(data);   
                
                // borrar la "linea" | <li></li>
                linea.remove();                    
                
            }
            
        );

    });

});
