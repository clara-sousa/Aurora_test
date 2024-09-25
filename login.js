document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('name', username);
    localStorage.setItem('password', password);
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
