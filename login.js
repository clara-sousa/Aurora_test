// Função para alternar entre os modais de login e cadastro
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
    }
}

// Função para cadastrar o usuário e armazenar os dados no localStorage
function registerUser(event) {
    event.preventDefault(); // Impede o comportamento padrão do form

    const username = document.querySelector('#registrationForm input[name="name"]').value;
    const password = document.querySelector('#registrationForm input[name="psw"]').value;
    const email = document.querySelector('#registrationForm input[name="eml"]').value;

    if (username && password && email) {
        // Armazenar os dados do usuário no localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);

        alert('Cadastro realizado com sucesso!');
        toggleForms(); // Alterna para o formulário de login após o cadastro
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para validar o login
function loginUser(event) {
    event.preventDefault(); // Impede o comportamento padrão do form

    const username = document.querySelector('#loginForm input[name="name"]').value;
    const password = document.querySelector('#loginForm input[name="psw"]').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Verificar se o login corresponde ao que foi armazenado no localStorage
    if (username === storedUsername && password === storedPassword) {
        alert('Login realizado com sucesso! Redirecionando para a página inicial...');
        // Redirecionar rapidamente para a página inicial após o login
        window.location.href = 'páginainicial.html';
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}

// Função para abrir o modal de Esqueceu sua Senha
function openModal() {
    document.getElementById('forgotPasswordModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

// Função para enviar o link de redefinição de senha
function sendResetLink() {
    const email = document.querySelector('#forgotPasswordModal input[name="email"]').value;
    alert(`Um link de redefinição de senha foi enviado para ${email}.`);
    closeModal(); // Fecha o modal após o envio
}
