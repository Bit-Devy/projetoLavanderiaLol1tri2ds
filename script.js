// document.querySelector(".login").addEventListener("click", function(event) {
//     event.preventDefault();

//     let email = document.querySelector("#emailLogin").value.trim();
//     let senha = document.querySelector("#senhaLogin").value;

//     // campos vazios
//     if (email === "" || senha === "") {
//         alert("Preencha todos os campos");
//         return;
//     }

//     // // email
//     // let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // if(!regexEmail.test(email)){
//     //     alert("Por favor, insira um endereço de e-mail válido com @ e domínio.");
//     //     return;
//     // }

//     // validação da senha
//     let contemNumero = /\d/.test(senha);
//     if (senha.length < 8 || !contemNumero) {
//         alert("A senha deve ter pelo menos 8 caracteres e incluir um número.");
//         return;
//     }

//     // Se passar nas validações
//     localStorage.setItem("logado", "sim");
//     alert("Login realizado com sucesso!");
//     window.location.href = "telaInicial.html";
// });

// Função do olhinho (mesma do cadastro)
function togglePassword(campoId, iconeClicado) {
    let container = iconeClicado.parentElement;
    let icons = container.querySelectorAll('.eye-icon');
    
    icons.forEach(icon => icon.classList.toggle('hide'));

    const campo = document.getElementById(campoId);
    const type = campo.getAttribute('type') === 'password' ? 'text' : 'password';
    campo.setAttribute('type', type);
}