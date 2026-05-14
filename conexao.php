<?php

define('DB_HOST', 'localhost');
define('DB_NAME', 'lavanderia');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

function getConexao(): PDO
{
    static $pdo = null;

    if ($pdo === null) {

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=%s',
    DB_HOST,
    DB_NAME,
    DB_CHARSET
);

    $opcoes = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
    ];
    $pdo = new PDO(
    $dsn,
    DB_USER,
    DB_PASS,
    $opcoes
);
    }

    return $pdo;
}