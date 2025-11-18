// Arquivo JavaScript para marcar na agenda

// Variável global para guardar a quadra selecionada
var quadraSelecionada = null;

// Função para carregar as informações da quadra
function carregarInfoQuadra() {
    // Pegar a quadra selecionada do localStorage
    var quadraJSON = localStorage.getItem("quadraSelecionada");
    
    if (quadraJSON == null) {
        alert("Nenhuma quadra selecionada!");
        window.location.href = "escolha_onde_jogar.html";
        return;
    }
    
    // Transformar em objeto
    quadraSelecionada = JSON.parse(quadraJSON);
    
    // Mostrar as informações da quadra na página
    var divInfo = document.getElementById("infoQuadra");
    divInfo.innerHTML = "<h3>Quadra: " + quadraSelecionada.nome + "</h3>" +
                        "<p>" + quadraSelecionada.endereco + ", " + quadraSelecionada.bairro + "</p>" +
                        "<p>" + quadraSelecionada.cidade + " - " + quadraSelecionada.estado + "</p>";
}

// Função para agendar
function agendar() {
    // Pegar os valores dos campos
    var data = document.getElementById("dataAgendamento").value;
    var horario = document.getElementById("horarioAgendamento").value;
    
    // Validar se os campos foram preenchidos
    if (data == "") {
        alert("Por favor, selecione uma data!");
        return;
    }
    
    if (horario == "") {
        alert("Por favor, selecione um horário!");
        return;
    }
    
    // Pegar o email do usuário logado
    var emailLogado = localStorage.getItem("usuarioLogado");
    
    if (emailLogado == null) {
        alert("Você precisa fazer login primeiro!");
        window.location.href = "login.html";
        return;
    }
    
    // Criar objeto do agendamento
    var agendamento = {
        quadra: quadraSelecionada,
        data: data,
        horario: horario,
        usuario: emailLogado,
        dataAgendamento: new Date().toISOString()
    };
    
    // Pegar os agendamentos existentes
    var agendamentos = localStorage.getItem("agendamentos");
    
    if (agendamentos == null) {
        agendamentos = [];
    } else {
        agendamentos = JSON.parse(agendamentos);
    }
    
    // Adicionar o novo agendamento
    agendamentos.push(agendamento);
    
    // Salvar no localStorage
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
    
    // Salvar também o último agendamento para mostrar na página de confirmação
    localStorage.setItem("ultimoAgendamento", JSON.stringify(agendamento));
    
    // Redirecionar para a página de confirmação
    window.location.href = "agendamento_confirmado.html";
}

// Quando a página carregar
window.onload = function() {
    // Carregar as informações da quadra
    carregarInfoQuadra();
    
    // Adicionar evento no botão de agendar
    var botaoAgendar = document.getElementById("btnAgendar");
    botaoAgendar.onclick = agendar;
    
    // Definir data mínima como hoje
    var hoje = new Date().toISOString().split('T')[0];
    document.getElementById("dataAgendamento").setAttribute('min', hoje);
}