<?php


include_once '../Conexao/bdd.php';
include_once '../DAO/DAO_despesas.php';

include_once '../Conexao/bdd.php';
include_once '../DAO/DAO_despesas.php';

$nome_despesa = $_POST[ 'nome_despesa' ];
$valor_despesa = $_POST[ 'valor_despesa' ];
$data_inicio = $_POST[ 'data_inicio' ];
$data_vencimento  = $_POST[ 'data_vencimento' ];
$situacao = $_POST[ 'situacao' ];
$tipo = $_POST[ 'tipo' ];
$id_user = 1;

$dao = new Daodespesas();

if ($dao->cadastrar_despesas( $nome_despesa, $valor_despesa, $data_inicio, $data_vencimento, $situacao, $tipo, $id_user ) ) {
    echo json_encode( true );

} else {
    echo json_encode( false );
}
?>