<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
    <link rel="stylesheet" href="cadastro.css">
</head>

<body>

<div class="caixaPrincipal">

    <!-- LADO ESQUERDO -->
    <div class="ladoEsquerdo">
        <h1>Crie sua <br> conta</h1>
        <p>Comece a usar a Leva&Lava</p>
    </div>

    <!-- FORMULÁRIO -->
    <div class="formulario">

        <h2>Cadastro</h2>

        <input type="text" id="nome" placeholder="Nome completo">
        <input type="email" id="email" placeholder="Email">

        <div class="password-container">
            <input type="password" id="senha" placeholder="Senha">
            <img src="hide.png" alt="Mostrar Senha" class="eye-icon" onclick="togglePassword('senha', this)">
            <img src="eye.png" alt="Ocultar Senha" class="eye-icon hide" onclick="togglePassword('senha', this)">
        </div>

        <div class="password-container">
            <input type="password" id="confirmarSenha" placeholder="Confirme sua senha">
            <img src="hide.png" alt="Mostrar Senha" class="eye-icon" onclick="togglePassword('confirmarSenha', this)">
            <img src="eye.png" alt="Ocultar Senha" class="eye-icon hide" onclick="togglePassword('confirmarSenha', this)">
        </div>
        <div class="opcaoLogin">
            <label>
                <input type="checkbox" id="termos">
                Aceito os termos

            
            </label>
        </div>

        <div class="botoes">

            <a href="login.html" class="cadastrar">
                Voltar
            </a>

            <button class="login" id="btnCadastrar">
                Cadastrar
            </button>

        </div>

        <p class="novaConta">
            Já tem conta? <span><a href="login.html">Entrar</a></span>
        </p>

    </div>

</div>

<script src="cadastro.js"></script>

</body>
</html>