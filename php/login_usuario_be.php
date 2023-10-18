<?php
 
    include 'conexion_be.php';

$email = $_POST['email'];
$password = $_POST['password'];
$password = hash('sha512', $password);

$validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email = '$email'
                and password = '$password'");

    if(mysqli_num_rows($validar_login) > 0){
        header("location: ../index.html");
        exit;
    }else{
        echo '
            <script>
                alert("Usuario no existe, verifique los datos introducidos");
                window.location = "../loginregister.php";
            </script>
            ';
            exit;    
        }


?>