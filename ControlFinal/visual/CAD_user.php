<?php
            
            include_once '../modelo/user.php';
            include_once '../Conexao/bdd.php';
            include_once '../DAO/DAO_User.php';
            
            
             $user_name = $_POST['user_name'];
             $email = $_POST['email'];
             $senha = $_POST['senha'];
 
         
        
        
            $user = new User($user_name, $email, $senha);
            
            $dao = new Daouser();
            
            if($dao->inclui($user)){
                echo json_encode(true);
            }else{
                echo json_encode(false);
            }
            
            
            ?>
