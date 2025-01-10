//Data do lancamento
const dataLancamento = new Date('2025-02-10T00:00:00')

//Atualizar contador a cada segundo
function atualizarContador() {
    const agora = new Date()
    const diferenca = dataLancamento - agora

    if (diferenca <= 0) {
        document.getElementById('contador').innerHTML = '<h2>Lançamento iniciado!</h2>'
        clearInterval(intervalo) // Para o intervalo
        return
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

    // Atualiza os elementos no DOM
    document.getElementById('dias').textContent = dias
    document.getElementById('horas').textContent = horas
    document.getElementById('minutos').textContent = minutos
    document.getElementById('segundos').textContent = segundos
}

// Inicia o contador
const intervalo = setInterval(atualizarContador, 1000)
atualizarContador() // Chamada inicial para evitar o atraso de 1 segundo