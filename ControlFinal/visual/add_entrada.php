<?php
include_once '../Conexao/bdd.php';
include_once '../DAO/DAO_entradas.php';

$origem = $_POST['origem'];
$valor = $_POST[ 'valor' ];
$data = $_POST[ 'data' ];
$id_user = 1;

$dao = new Daoentrada();

if ($dao->inclui_entrada($origem, $valor, $data, $id_user)){
    echo json_encode(true);
} else {
    echo json_encode(false);
}
?>