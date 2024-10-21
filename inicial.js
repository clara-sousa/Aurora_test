document.addEventListener("DOMContentLoaded", function() {
    // Exibe um alerta de boas-vindas ao carregar a página
    alert("Bem-vindo ao nosso site!");

    // Verifica se o usuário já aceitou ou rejeitou os cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    
    // Se não houver registro, exibe o wrapper de cookies
    if (!cookiesAccepted) {
        document.getElementById("cookie-wrapper").style.display = "flex";
    }

    // Função para aceitar os cookies
    document.getElementById("accept-cookies").addEventListener("click", function() {
        // Armazena a aceitação dos cookies no localStorage
        localStorage.setItem("cookiesAccepted", "true");
        // Oculta o wrapper de cookies
        document.getElementById("cookie-wrapper").style.display = "none";
    });

    // Função para rejeitar os cookies
    document.getElementById("reject-cookies").addEventListener("click", function() {
        // Armazena a rejeição dos cookies no localStorage
        localStorage.setItem("cookiesAccepted", "false");
        // Oculta o wrapper de cookies
        document.getElementById("cookie-wrapper").style.display = "none";
    });
});