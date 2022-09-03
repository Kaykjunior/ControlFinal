<?php
require_once '../DAO/DAO_despesas.php';
require_once '../Conexao/bdd.php';

$dao = new Daodespesas();

$id_user = 1;
$lista = $dao -> saldo_geral($id_user);

echo json_encode($lista);

?>