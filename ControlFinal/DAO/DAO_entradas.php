<?php

class Daoentrada{

    public function listarentrda($id_user){
        ini_set('default_charset', 'utf8');
        $lista = [];
        $pst = Conexao::getPreparedStatement("SELECT * FROM entradas;");
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
        return $lista;
    }

    public function inclui_entrada($origem, $valor, $data, $id_user){
 
        $sql = "CALL cad_entradas($valor, '$origem', '$data', $id_user);";
        $pst = Conexao::getPreparedStatement($sql);
        
        if($pst->execute()){
            return true;
        }else{
            var_dump($pst->errorInfo());
            return false;
        }
        }
}
?>