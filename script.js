document.querySelector(".login").addEventListener("click", function(){

localStorage.setItem("logado","sim");

alert("Login simulado");

});

/*faz o botao cadastro funcionar*/
function irCadastro(){

window.location.href = "cadastro.html";

}