<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  require("../comun/db.php"); 

  $conexion = conexion(); 
  $registros = mysqli_query($conexion, "SELECT * FROM notascreadas WHERE id=$_GET[id]");

  if ($resultado = mysqli_fetch_array($registros))  
  {
    $datos[] = $resultado;
  }
  $json = json_encode($datos); 
  echo $json; 
?>