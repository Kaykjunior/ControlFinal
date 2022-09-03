<?php
class DaoUser{
public function listatodosuser(){
    
    $lista =[];
    $pst = Conexao::getPreparedStatement('SELECT * from user;');
    $pst->execute();
    $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
    return $lista;
}



public function inclui(user $user){
    
    $user_name = $user->getuser_name();
    $email = $user->getemail();
    $senha = $user->getsenha();
    
$sql = "CALL CAD_User('$user_name', '$email', '$senha');";
$pst = Conexao::getPreparedStatement($sql);

if($pst->execute()){
    return true;
}else{
    var_dump($pst->errorInfo());
    return false;
}
}

public function login($email, $senha){
    $lista =[];
    $pst = Conexao::getPreparedStatement("CALL login ('$email', '$senha');");
    $pst->execute();
    $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
    if($lista)
    return $lista;
}


}

?>