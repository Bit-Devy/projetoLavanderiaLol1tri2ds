<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Lavanderia Login</title>
    <link rel="stylesheet" href="style.css">
</head>

<body> <!-- Caixa principal -->
    <div class="caixaPrincipal"> <!-- Lado esquerdo -->
        <div class="ladoEsquerdo">
            <h1>Bem-vindo de <br> volta!</h1>
            <p>Ficamos felizes em te ver novamente</p>
            <!-- formulario que envia pro php -->

        </div> <!-- Formulário -->
        <div class="formulario">
        <form action="processa_login.php" method="POST"></form>
            <h2>Login</h2> 
            <input 
    type="email"
    id="emailLogin"
    name="email"
    placeholder="Usuário ou email">
            <div class="password-container"> 
                <input 
    type="password"
    id="senhaLogin"
    name="senha"
    placeholder="Senha"
> <img
                    src="hide.png" alt="Mostrar" class="eye-icon" onclick="togglePassword('senhaLogin', this)"> <img
                    src="eye.png" alt="Esconder" class="eye-icon hide" onclick="togglePassword('senhaLogin', this)">
            </div> <!-- Opções -->
            <div class="opcaoLogin"> <label> <input type="checkbox"> Lembre de mim </label> <a href="#">Esqueceu a
                    senha?</a> </div> <!-- Botões -->
            <div class="botoes"> <a href="suporte.php" class="cadastrar"> Suporte </a> <button type="submit" class="login"> Avançar
                </button> </div> <!-- Criar conta -->
        </form>
            <p class="novaConta"> Novo aqui? <span><a href="cadastro.php">Crie uma Conta</a></span> </p>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>