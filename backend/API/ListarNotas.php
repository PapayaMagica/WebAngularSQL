<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  require("../comun/db.php");

  global $datos; 
  $conexion = conexion(); 
  $registros = mysqli_query($conexion,"SELECT * FROM notascreadas");
  
  while ($resultado = mysqli_fetch_array($registros))  
  {
    $datos[] = $resultado;
  }
  
  $json = json_encode($datos); 
  header('Content-Type: application/json'); 
  echo $json; 
?>