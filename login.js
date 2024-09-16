document.getElementById('loginForm').addEventListener('submit', function(event){

const username=
document.getElementById('username').value;
const password=
document.getElementById('password').value;

localStorage.setItem('username',username);
localStorage.setItem('password', password);
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username !== "" && password !== "") {
        if (username === "usuarioValido" && password === "senhaValida") {
            alert("Login realizado com sucesso!");
        } else {
            alert("Usuário ou senha inválidos");
        }
    } else {
        alert("Por favor, preencha todos os campos");
    }
});
