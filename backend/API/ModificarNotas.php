<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  require("../comun/db.php");

  $json = file_get_contents('php://input');
  $params = json_decode($json);
  $conexion = conexion(); 

  mysqli_query($conexion, "UPDATE notascreadas SET titulo='$params->titulo',estado='$params->estado',descripcion='$params->descripcion' WHERE id=$params->id");
  
  class Result {}
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'LA NOTA SE ACTUALIZÓ EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); 
?>