// Define o tempo da contagem regressiva (em segundos)
let countdownTime = 128 * 3600; // 128 horas em segundos

function countdown() {
    if (countdownTime >= 0) {
        // Envia o tempo formatado para o script principal
        postMessage(formatTime(countdownTime));
        countdownTime--; // Decrementa o contador
    }
}

// Função para formatar o tempo em dias, horas, minutos e segundos
function formatTime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: remainingSeconds
    };
}

// Inicia a contagem a cada segundo
setInterval(countdown, 1000);
