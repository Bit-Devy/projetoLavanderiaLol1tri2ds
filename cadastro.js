document.querySelector("#btnCadastrar").addEventListener("click", function(event){
    // nao deixa recarregar a pagina automaticamente
    event.preventDefault(); 

    // O .trim() remove espaços em branco acidentais no começo ou no final
    let nome = document.querySelector("#nome").value.trim();
    let email = document.querySelector("#email").value.trim();
    let senha = document.querySelector("#senha").value;
    let confirmar = document.querySelector("#confirmarSenha").value;
    let termos = document.querySelector("#termos").checked;

    //validação simples
    if(nome === "" || email === "" || senha === "" || confirmar === ""){
        alert("Preencha todos os campos");
        return;
    }

    //validação do nome, pelo menos duas palavras
    //divide onde tiver espaço
    let partesNome = nome.split(/\s+/); 
    if(partesNome.length < 2){
        alert("Por favor, insira seu nome e sobrenome.");
        return;
    }

    //validaçao do email(texto@texto.texto)
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email)){
        alert("Por favor, insira um endereço de e-mail válido com @ e domínio.");
        return;
    }

    // validacao da senha
    let contemNumero = /\d/.test(senha); // \d verifica se existe algum dígito (0-9)
    if(senha.length < 8 || !contemNumero){
        alert("A senha deve ter pelo menos 8 caracteres e incluir no mínimo um número.");
        return;
    }

    // senhas igauis
    if(senha !== confirmar){
        alert("As senhas não coincidem");
        return;
    }

    // valida termos
    if(!termos){
        alert("Você precisa aceitar os termos");
        return;
    }

    // se tudo passar finaliza o cadastro
    localStorage.setItem("usuario", email);
    localStorage.setItem("logado", "sim");

    alert("Cadastro realizado com sucesso!");

    // redireciona pro site
    window.location.href = "telaInicial.html";
});

// A
function togglePassword(campoId, iconeClicado) {
    //pega a caixa onde o icone foi guardado
    let container = iconeClicado.parentElement;
    
    //procura todas as imagens (os dois olhinhos) DENTRO desse container especifico
    let icons = container.querySelectorAll('.eye-icon');
    
    //alterna a classe 'hide' apenas entre esses dois olhinhos
    icons.forEach(icon => {
        icon.classList.toggle('hide');
    });

    //sleciona o input correto
    const campo = document.getElementById(campoId);

    //
    const type = campo.getAttribute('type') === 'password' ? 'text' : 'password';
    
    //Aplica a mudança
    campo.setAttribute('type', type);
}