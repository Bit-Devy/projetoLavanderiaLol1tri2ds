document.querySelector("#btnCadastrar").addEventListener("click", function(){

    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let confirmar = document.querySelector("#confirmarSenha").value;
    let termos = document.querySelector("#termos").checked;

    // validações simples
    if(nome === "" || email === "" || senha === "" || confirmar === ""){
        alert("Preencha todos os campos");
        return;
    }

    if(senha !== confirmar){
        alert("As senhas não coincidem");
        return;
    }

    if(!termos){
        alert("Você precisa aceitar os termos");
        return;
    }

    // simula cadastro
    localStorage.setItem("usuario", email);
    localStorage.setItem("logado", "sim");

    alert("Cadastro realizado com sucesso!");

    // redireciona pro site
    window.location.href = "telaInicial.html";

});
 