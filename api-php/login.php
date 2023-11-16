<?php 
    require 'connect.php';
    require 'headers.php';

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input'));
        
        $verify = "SELECT * FROM users WHERE user = ?;";
        $stmt = mysqli_prepare($conn, $verify);
        mysqli_stmt_bind_param($stmt, 's', $user->login);
        mysqli_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        if(mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_assoc($result);
            $hashedPassword = $row['password'];
            if(password_verify($user->pass, $hashedPassword)) {
                print_r(json_encode(['error' => false]));
            }   
            else{
                $message = "Login or Password Invalid!";
                print_r(json_encode(['message' => $message, 'error' => true]));
            }
        }
        else{
            $message = "Login or Password Invalid!";
            print_r(json_encode(['message' => $message, 'error' => true]));
        }
    }
?>