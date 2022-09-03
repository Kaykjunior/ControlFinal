<?php
require_once '../DAO/DAO_User.php';
require_once '../Conexao/bdd.php';

$du = new DaoUser();


$lista = $du -> listatodosuser();

    echo json_encode($lista);


?>