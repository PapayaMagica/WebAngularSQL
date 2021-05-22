<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  require("../comun/db.php");

  $conexion = conexion();
  
  mysqli_query($conexion, "DELETE FROM notascreadas WHERE id=$_GET[id]");

  class Result {}
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'LA NOTA SE ELIMINÓ EXITOSAMENTE';

  header('Content-Type: application/json');
  echo json_encode($response); 
?>