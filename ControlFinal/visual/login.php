<?php
require_once '../DAO/DAO_User.php';
require_once '../Conexao/bdd.php';


$email = $_POST['email'];
$senha = $_POST['senha'];
    
    
$du = new DaoUser();
$lista = $du -> login($email, $senha);

echo json_encode($lista)
?>