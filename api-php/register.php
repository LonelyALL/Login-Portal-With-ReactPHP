<?php 
    require 'connect.php';
    require 'headers.php';
    
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input'));

        $newSenha = password_hash($user->pass, PASSWORD_DEFAULT);

        $verify = "SELECT * FROM users WHERE user = ?;";
        $stmt_verify = mysqli_prepare($conn, $verify);
        mysqli_stmt_bind_param($stmt_verify, "s", $user->login);
        mysqli_execute($stmt_verify);
        $result = mysqli_stmt_get_result($stmt_verify);
        if(mysqli_num_rows($result) == 0){
            $sql = "INSERT INTO users (user, password) VALUES (?, ?);";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ss", $user->login, $newSenha);
            mysqli_execute($stmt);
            
            $message = "User created successfully!";
            print_r(json_encode(['message' => $message, 'error' => false]));
        }
        else{
            $message = "Error while creating user!";
            print_r(json_encode(['message' => $message, 'error' => true]));
        }
    }
?>