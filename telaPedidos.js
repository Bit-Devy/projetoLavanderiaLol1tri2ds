




const pedidos = [
    {
        nome: "João",
        email: "joao@email.com",
        pecas: 5,
        distancia: "5.2 km",
        status: "aberto",
        foto: "https://cdn-images.dzcdn.net/images/artist/4bdd4e3199da943442ea86ac9aa66b12/1900x1900-000000-80-0-0.jpg"
    },
     {
        nome: "João",
        email: "joao@email.com",
        pecas: 5,
        distancia: "5.2 km",
        status: "teste",
        foto: "https://cdn-images.dzcdn.net/images/artist/4bdd4e3199da943442ea86ac9aa66b12/1900x1900-000000-80-0-0.jpg"
    },
    {
        nome: "Jose",
        email: "jose@email.com",
        pecas: 9,
        distancia: "3.9 km",
        status: "preparo",
        foto: ""
    },
    {
        nome: "abab ab",
        email: "teste12@email.com",
        pecas: 16,
        distancia: "9.8 km",
        status: "entrega",
        foto: ""
    },
    {
        nome: "Maria",
        email: "maria@email.com",
        pecas: 2,
        distancia: "1.2 km",
        status: "aberto",
        foto: ""
    },
    {
        nome: "Maria",
        email: "maria@email.com",
        pecas: 2,
        distancia: "1.2 km",
        status: "aberto",
        foto: ""
    }, 
    {
        nome: "rodovildo",
        email: "rodovildo3467",
        pecas: 23,
        distancia: "53 km",
        status: "preparo",
        foto: "https://yt3.googleusercontent.com/ysvK-iQUy0ezr6odoS7-fr3mbFkd-OdGwDuhZYQa3g4Rzi_kbdPj9X_jvc7D1JS6L7LcxGCN4Q=s900-c-k-c0x00ffffff-no-rj"
    }, 
  
];

function criarCard(pedido){
    return `
        <div class="card">
            <div class="cardTopo">
                <img src="${pedido.foto}">
                <div>
                    <strong>${pedido.nome}</strong><br>
                    <span class="info">${pedido.email}</span>
                </div>
            </div>

            <div class="info">
    <img src="cabide.png" class="icon"> ${pedido.pecas} peças
    <span class="separador">|</span>
    <img src="carro.png" class="icon"> ${pedido.distancia}
</div>

            <div class="cardBotoes">
                <button class="dispensar">DISPENSAR</button>
                <button class="aceitar">ACEITAR</button>
            </div>
        </div>
    `;
}



function renderizar(){

    document.getElementById("aberto").innerHTML = "<h2>Em aberto</h2>";
    document.getElementById("preparo").innerHTML = "<h2>Em preparo</h2>";
    document.getElementById("entrega").innerHTML = "<h2>Em entrega</h2>";

    pedidos.forEach(p => {
        const coluna = document.getElementById(p.status);
        coluna.innerHTML += criarCard(p);
    });
}


renderizar();