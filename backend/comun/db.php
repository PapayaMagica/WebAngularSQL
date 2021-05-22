<?php
    //Conexión con la base de datos notas
    global $enlace; 
    function conexion()
    {
        $enlace = mysqli_connect('localhost', 'root', '', 'notas'); 
        if(!$enlace)
        { 
        echo "Error: No se puede conectar a MySQL." . PHP_EOL;
        echo "Error de depuracion: " . mysqli_connect_error() . PHP_EOL;
        exit;
        }
    return $enlace;
    }
?>