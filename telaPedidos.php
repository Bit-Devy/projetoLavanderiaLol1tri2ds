<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Painel de pedidos</title>
    <link rel="stylesheet" href="telaPedidos.css">
</head>

<body>

<header class="topo">
    <div class="menuIcon">☰</div>
    <h1>Painel de pedidos</h1>

    <div class="acoes">
        <button class="historico">Histórico</button>
        <button class="novo">+ Novo pedido</button>
    </div>
</header>

<section class="painel">

    <div class="coluna" id="aberto">
        <h2>Em aberto</h2>
    </div>

    <div class="coluna" id="preparo">
        <h2>Em preparo</h2>
    </div>

    <div class="coluna" id="entrega">
        <h2>Em entrega</h2>
    </div>

    <div class="coluna" id="teste">
        <h2>teste</h2>
    </div>


    <!-- <div class="acoes">
    <button class="btn dispensar">DISPENSAR</button>
    <button class="btn aceitar">ACEITAR</button>
</div> -->

</section>



<script src="telaPedidos.js"></script>
</body>
</html>