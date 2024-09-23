document.addEventListener('DOMContentLoaded', function() {
    let notificacoesAceitas = false;
    function carregarEstados() {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(estados => {
                const estadoSelect = document.getElementById('estado');
                estados.forEach(estado => {
                    const option = document.createElement('option');
                    option.value = estado.id;
                    option.textContent = estado.nome;
                    estadoSelect.appendChild(option);
                });
            })
            .catch(error => console.error('Erro ao carregar estados:', error));
    }
    function atualizarCidades(estadoId) {
        const cidadesSelect = document.getElementById('cidade');
        cidadesSelect.innerHTML = ''; 
        if (estadoId) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
                .then(response => response.json())
                .then(cidades => {
                    cidades.forEach(cidade => {
                        const option = document.createElement('option');
                        option.value = cidade.nome;
                        option.textContent = cidade.nome;
                        cidadesSelect.appendChild(option);
                    });
                })
                .catch(error => console.error('Erro ao carregar cidades:', error));
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Selecione uma cidade';
            cidadesSelect.appendChild(option);
        }
    }

    carregarEstados();
    document.getElementById('estado').addEventListener('change', function() {
        const estadoId = this.value;
        atualizarCidades(estadoId);
    });

    document.getElementById('acceptBtn').addEventListener('click', function() {
        notificacoesAceitas = true;
    });

    document.getElementById('rejectBtn').addEventListener('click', function() {
        notificacoesAceitas = false;
    });
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const userName = document.querySelector("[name='Nome Completo']").value;
        const userBirthday = document.querySelector("input[type='date']").value;
        const userGender = document.querySelector("#opções").value;
        const userState = document.querySelector("#estado").value;
        const userCity = document.querySelector("#cidade").value;
        const userCEP = document.querySelector("[name='number']").value;
        const userNumber = document.querySelector("[name='tel']").value;
        const userEmail = document.querySelector("[name='email']").value;
        const userPassword = document.querySelector("[name='password']").value;

        if (!userName || !userBirthday || !userGender || !userState || !userCity || !userCEP || !userNumber || !userEmail || !userPassword) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        localStorage.setItem('username', userName);
        localStorage.setItem('userbirthday', userBirthday);
        localStorage.setItem('usergender', userGender);
        localStorage.setItem('userstate', userState);
        localStorage.setItem('usercity', userCity);
        localStorage.setItem('usercep', userCEP);
        localStorage.setItem('usernumber', userNumber);
        localStorage.setItem('useremail', userEmail);

        if (notificacoesAceitas) {
            alert("Você aceitou receber notificações.");
        } else {
            alert("Você optou por não receber notificações.");
        }

        window.location.href = "PaginaInicial.html";
    });
});
