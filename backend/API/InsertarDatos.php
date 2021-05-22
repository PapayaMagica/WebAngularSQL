<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  require("../comun/db.php");

  $json = file_get_contents('php://input'); 
  $params = json_decode($json); 
  $conexion = conexion();
  
  mysqli_query($conexion, "INSERT INTO notascreadas(titulo, estado, descripcion) VALUES ('$params->titulo', '$params->estado', '$params->descripcion')");    
  
  class Result {}
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'LA NOTA SE REGISTRÓ EXITOSAMENTE';

  header('Content-Type: application/json');
  echo json_encode($response); 
?>