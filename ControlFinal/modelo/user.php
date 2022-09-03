<?php
class User{
    private $user_name;
    private $email;
    private $senha;

    public function __construct( $user_name ='', $email='', $senha='') {

        $this->user_name = $user_name;
        $this->email = $email;
        $this->senha = $senha;
    }

    public function getuser_name(){
        return $this->user_name;
    }
    public function setname_user($user_name){
        $this->user_name = $user_name;
    }

    public function getemail(){
        return $this->email;
    }
    public function setemail($email){
        $this->email = $email;
    }

    public function getsenha(){
        return $this->senha;
    }
    public function setsenha($senha){
        $this->senha = $senha;
    }
}
?>