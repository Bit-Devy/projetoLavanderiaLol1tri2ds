// <?php
// importa os bagui
// require_once 'conexao.php';

// $pdo = getConexao();

// echo "Conexão funcionando!"; -->

require_once 'conexao.php';

$pdo = getConexao();
// resultado da consulta;;;

$stmt = $pdo->query("SELECT nome, email FROM usuarios");
// vira array 
$usuarios = $stmt->fetchAll();
// pega coisa da tabela
foreach($usuarios as $u){

    echo $u['nome'] . " - " . $u['email'];
    echo "<br>";

}