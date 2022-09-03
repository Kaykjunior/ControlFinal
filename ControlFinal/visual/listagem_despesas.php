<?php
require_once '../DAO/DAO_despesas.php';
require_once '../Conexao/bdd.php';

$dao = new Daodespesas();
$lista = $dao -> listarTodasDespesas(1);


echo json_encode($lista)

?>