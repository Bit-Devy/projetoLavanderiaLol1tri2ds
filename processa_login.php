<?php

// inicia sessão
session_start();

// conecta banco
require_once 'conexao.php';

// pega email
$email = $_POST['email'];

// pega senha
$senha = $_POST['senha'];

// conexão
$pdo = getConexao();

// procura usuário
$stmt = $pdo->prepare(
    "SELECT * FROM usuarios WHERE email = :email"
);

// executa
$stmt->execute([
    ':email' => $email
]);

// pega resultado
$usuario = $stmt->fetch();

// verifica senha
if($usuario && password_verify($senha, $usuario['senha'])){

    // salva sessão
    $_SESSION['usuario_id'] = $usuario['id'];

    $_SESSION['usuario_nome'] = $usuario['nome'];

    // entra no site
    header("Location: telaInicial.php");
    exit;

}else{

    echo "Login inválido";

}