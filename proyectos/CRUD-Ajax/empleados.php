<?php

    // === permiete conexión AJAX entre servidores ===
    header('Access-Control-Allow-Origin: *');

    // === variables de conexión a la bbdd ===
    $servidor = "localhost";
    $usuario = "root";
    $pass = "";
    $bd = "php_crud_ajax";

    // === instancia de conexión | realiza conexión a bbdd ===
    $mysql = new mysqli($servidor, $usuario, $pass, $bd);

    // ===============================================================
    // === si el requerimiento/acción es "leer" | LISTAR EMPLEADOS ===
    // ===============================================================
    if ($_REQUEST['accion'] == "leer") {

        // === array | contiene resultados ===
        $arreglo = array();

        // === crear consulta sql ===
        $consulta = "SELECT id, nombre, puesto, edad FROM empleados";

        // === si existen resultados | haz lo siguiente ===
        if ($result = $mysql -> query($consulta)) {

            // recibe todos los resultados en un registro | los captura y los convierte a un array
            while ($row = $result -> fetch_array(MYSQLI_ASSOC)) {

            // meter todos los resultados/registros en el array
            $arreglo[] = $row;
            }

            // imprimir JSON por pantalla | y le pasamos el array
            echo json_encode($arreglo);
        }

        // === cerrar resultados | para ahorrar memoria al servidor ===
        $result -> close();

    }

    // ==================================================================
    // === si el requerimiento/acción es "insertar" | CREAR EMPLEADOS ===
    // ================================================================== 
    else if ($_REQUEST['accion'] == "insertar"){

        // === crear consulta sql ===
        $sql = "INSERT INTO empleados (nombre, puesto, edad) VALUES ('".$_POST["nombre"]."', '".$_POST["puesto"]."', '".$_POST["edad"]."') ";

        // === si la conexión con la consulta sql fué correcta | 1 ===
        if ($mysql -> query($sql) == true) {
            echo "1";
        } else {
            // si la hubo algún error | 0
            echo "0";
        }
    }

    // =================================================================
    // === si el requerimiento/acción es "editar" | EDITAR EMPLEADOS ===
    // ================================================================= 
    else if ($_REQUEST['accion'] == "editar"){

        // === crear consulta sql ===
        $sql = "UPDATE empleados SET nombre = '".$_POST["nombre"]."', puesto = '".$_POST["puesto"]."', edad = '".$_POST["edad"]."' WHERE id = '".$_POST["id"]."'";

        // === si la conexión con la consulta sql fué correcta | 1 ===
        if ($mysql -> query($sql) == true) {
            echo "1";
        } else {
            // si la hubo algún error | 0
            echo "0";
        }
    }

    // ===================================================================
    // === si el requerimiento/acción es "borrar" | ELIMINAR EMPLEADOS ===
    // =================================================================== 
    else if ($_REQUEST['accion'] == "borrar"){

        // === crear consulta sql ===
        $sql = "DELETE FROM empleados WHERE id = '".$_POST["id"]."'";

        // === si la conexión con la consulta sql fué correcta | 1 ===
        if ($mysql -> query($sql) == true) {
            echo "1";
        } else {
            // si la hubo algún error | 0
            echo "0";
        }
    }


    // === cerrar conexión | para ahorrar memoria al servidor ===
    $mysql -> close();


?>