document.addEventListener('DOMContentLoaded', function() {
    let notificacoesAceitas = false;
    const cidadesPorEstado = {
        AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        AM: ["Manaus", "Parintins", "Itacoatiara"],
        BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        CE: ["Fortaleza", "Juazeiro do Norte", "Sobral"],
        DF: ["Brasília"],
        ES: ["Vitória", "Vila Velha", "Serra"],
        GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
        MA: ["São Luís", "Imperatriz", "Caxias"],
        MG: ["Belo Horizonte", "Uberlândia", "Contagem"],
        MS: ["Campo Grande", "Dourados", "Três Lagoas"],
        MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        PA: ["Belém", "Ananindeua", "Santarém"],
        PB: ["João Pessoa", "Campina Grande", "Patos"],
        PE: ["Recife", "Olinda", "Caruaru"],
        PI: ["Teresina", "Parnaíba", "Picos"],
        PR: ["Curitiba", "Londrina", "Maringá"],
        RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
        RN: ["Natal", "Mossoró", "Parnamirim"],
        RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        RR: ["Boa Vista"],
        RS: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        SC: ["Florianópolis", "Joinville", "Blumenau"],
        SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        SP: ["São Paulo", "Campinas", "Santos"],
        TO: ["Palmas", "Araguaína", "Gurupi"]
    };
    function atualizarCidades(estadoSelecionado) {
        const cidadesSelect = document.getElementById('cidade');
        cidadesSelect.innerHTML = ''; 
        if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
            cidadesPorEstado[estadoSelecionado].forEach(function(cidade) {
                const option = document.createElement('option');
                option.value = cidade;
                option.textContent = cidade;
                cidadesSelect.appendChild(option);
            });
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Selecione uma cidade';
            cidadesSelect.appendChild(option);
        }
    }  document.getElementById('estado').addEventListener('change', function() {
        const estadoSelecionado = this.value;
        atualizarCidades(estadoSelecionado);
    }); document.getElementById('acceptBtn').addEventListener('click', function() {
        notificacoesAceitas = true;
    });  document.getElementById('rejectBtn').addEventListener('click', function() {
        notificacoesAceitas = false;
    }); document.getElementById('cadastroForm').addEventListener('submit', function(event) {
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