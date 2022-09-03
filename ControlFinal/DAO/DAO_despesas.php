<?php
class Daodespesas{

    public function listarTodasDespesas($id_user){
        ini_set('default_charset', 'utf8');
        $lista = [];
        $pst = Conexao::getPreparedStatement("SELECT * from despesas WHERE id_user = $id_user;");
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
        return $lista;
    }



    public function cadastrar_despesas($nome_despesa, $valor_despesa, $data_inicio, $data_vencimento, $situacao, $tipo, $id_user){
        ini_set('default_charset', 'utf8');
        $sql = "CALL CAD_DESPESA('$nome_despesa', '$valor_despesa', '$data_inicio', '$data_vencimento', '$situacao', '$tipo', '$id_user');";
    $pst = Conexao::getPreparedStatement($sql);
    
    if($pst->execute()){
        return true;
    }else{
        var_dump($pst->errorInfo());
        return false;
    }
    }



    public function valor_despesas($id_user){
        $lista = [];
        $pst = Conexao::getPreparedStatement("call somar_despesas($id_user);");
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
        return $lista;

}

public function saldo_geral($id_user){
    $lista = [];
    $pst = Conexao::getPreparedStatement("call somar_saldo($id_user)");
    ($id_user);
    $pst->execute();
    $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
    return $lista;

}
}
?>