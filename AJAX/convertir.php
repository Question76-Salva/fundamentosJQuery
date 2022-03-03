<?php

    // === permitir conexión via Ajax por mi servidor a cualquier petición Ajax ===
    header('Access-Control-Allow-Origin: *');

    // === decir a mi servidor/backend | si recibe una petición con la variable "operacion" ===
    // convertir el texto a mayusculas
    // if ( $_REQUEST['operacion'] == 'may') {
    //     echo strtoupper( $_REQUEST['texto']);
    //     // === decir a mi servidor/backend | si recibe una petición con la variable "operacion" ===
    //     // convertir el texto a minusculas
    // } else if ( $_REQUEST['operacion'] == 'min') {
    //     echo strtolower( $_REQUEST['texto']);
    // } else {
    //     // === si el servidor no recibe nada | retornar el mismo texto que recibiste ===
    //     // no se convierte ni a mayusculas ni a minusculas
    //     echo $_REQUEST["texto"];
    // }

    // === si recibimos los datos | mostrarlos ===
    if (isset($_POST['nombre']) && isset($_POST['puesto'])){
        // echo "Nombre: " . $_POST['nombre'] . " <br> Puesto: " . $_POST['puesto'];
        echo "Nombre: $_POST[nombre] <br> Puesto $_POST[puesto]";
    } 

    
    
?>