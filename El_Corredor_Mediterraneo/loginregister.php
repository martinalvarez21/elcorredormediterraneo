<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register - ECM</title>
    <link rel="stylesheet" href="assets/css/style.css"
</head>
<body>
    <main>
        <div class="contenedor__todo">
            <div class="caja_trasera">
                <div class="caja_trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia Sesion para ingresar en la pagina</p>
                    <button id="btn_iniciar-sesion">Iniciar Sesion</button>
                </div>
                <div class="caja_trasera-register">
                    <h3>¿Todavia no posees una cuenta?</h3>
                    <p>Registrate para poder iniciar sesion </p>
                    <button id="btn_register">Registrarse</button>
                </div>
            </div>
            
            <div class="contenedor_login-register"> 
                <form action="php/login_usuario_be.php" class="formulario_login" method = "POST">
                    <h2>Iniciar Sesion</h2>
                    <input type="text" placeholder="Correo Electronico" name = "email">
                    <input type="password" placeholder="Contraseña" name = "password" >
                    <button>Iniciar Sesion</button>
                </form>

                <form action="php/registro_usuario_be.php" method="POST" class="formulario_register">
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre Completo" name="nombre_completo">
                    <input type="text" placeholder="Correo Electronico" name = "email" >
                    <input type="text" placeholder="Usuario"   name = "usuario" >
                    <input type="password" placeholder="Contraseña" name = "password">
                    <button>Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <script src="assets/js/script.js"></script>
</body>
</html>