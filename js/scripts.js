//Data do lancamento
const dataLancamento = new Date('2025-04-27T00:00:00')

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

// Inicializa o EmailJS
emailjs.init('NjT534ImlGhnZQjtb')

// Adiciona evento ao botão
document.getElementById('enviar').addEventListener('click', function (e) {
    e.preventDefault()

    let hasError = false

    const checkbox = document.getElementById('termos')
    const label = document.querySelector('label[for="termos"]')
    const errorCheckbox = document.getElementById('error-termos')

    // Função para validar inputs
    const validateInput = (id, errorId, message) => {
        const input = document.getElementById(id)
        const error = document.getElementById(errorId)

        if (!input.value.trim()) {
            input.classList.add('error')
            error.textContent = message
            error.classList.add('active')
            hasError = true
        } else {
            input.classList.remove('error')
            error.textContent = ''
            error.classList.remove('active')
        }
    }

    // Validações específicas
    validateInput('nome', 'error-nome', 'Informe seu nome.')
    validateInput('email', 'error-email', 'Informe seu e-mail.')
    validateInput('celular', 'error-celular', 'Informe seu celular.')

    // Termos de uso
    if (!document.getElementById('termos').checked) {
        checkbox.classList.add('error')
        label.classList.add('error')
        errorCheckbox.textContent = 'Você precisa aceitar os termos de uso.'
        errorCheckbox.classList.add('active')
        hasError = true
    } else {
        checkbox.classList.remove('error')
        label.classList.remove('error')
        errorCheckbox.textContent = ''
        errorCheckbox.classList.remove('active')
    }

    if (!hasError) {
        // Prosseguir com o envio
        const templateParams = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            nicho: document.getElementById('nicho').value,
        }

        emailjs.send('service_i182duv', 'template_crbklh3', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text)

                // Esconde o formulário e mostra a tela de sucesso
                document.getElementById('formulario').style.display = 'none'
                document.getElementById('sucesso').style.display = 'block'
            }, function (error) {
                alert('Erro ao enviar o formulário. Tente novamente mais tarde.')
                console.log('FAILED...', error)
            })
    }
})

// Botão "Ok" para voltar ao formulário
document.getElementById('voltar').addEventListener('click', function () {
    // Mostra o formulário e esconde a tela de sucesso
    document.getElementById('formulario').style.display = 'block'
    document.getElementById('sucesso').style.display = 'none'

    // Limpa os campos do formulário
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('celular').value = ''
    document.getElementById('nicho').value = ''
    document.getElementById('termos').checked = false
})

//Redirecionar redes sociais
function redirecionarInstagram() {
    window.open('https://www.instagram.com/pluug.ai?igsh=MWp5b3Z3c2dkNHRsdA%3D%3D&utm_source=qr')
}

function redirecionarLinkedIn() {
    window.open('https://www.linkedin.com/company/pluug-ai/')
}

function redirecionarWhatsApp() {
    window.open('https://www.wa.link/vwke0b')
}

//Scroll até a seção
function scrollToSection() {
    const section = document.getElementById('entre-em-contato')
    section.scrollIntoView({ behavior: 'smooth' })
}

//depoimentos
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'))
    document.getElementById(tabId).classList.add('active')

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'))
    document.getElementById('tab-' + tabId).classList.add('active')
}

//menu dropdown depoimentos
function toggleMenu() {
    const menu = document.getElementById('menuDropdown')
    menu.classList.toggle('active')
}

// Fecha o menu ao clicar fora dele
window.onclick = function (event) {
    const menu = document.getElementById('menuDropdown')
    if (!event.target.matches('.fa-chevron-down') && !event.target.closest('.menu-dropdown')) {
        menu.classList.remove('active')
    }
}

//modals transformacao criadores
function abrirModalTransformacao(id) {
    document.getElementById(id).style.display = 'flex';
}

function fecharModalTransformacao(id) {
    document.getElementById(id).style.display = 'none';
}

function fecharModalTransformacaoPorFora(event, id) {
    const modalContent = document.querySelector(`#${id} .modal-transformacao-content`);
    if (!modalContent.contains(event.target)) {
        fecharModalTransformacao(id);
    }
}