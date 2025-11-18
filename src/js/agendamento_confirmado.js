// Arquivo JavaScript para mostrar o agendamento confirmado

// Função para formatar a data
function formatarData(data) {
    var partes = data.split("-");
    var ano = partes[0];
    var mes = partes[1];
    var dia = partes[2];
    return dia + "/" + mes + "/" + ano;
}

// Função para carregar as informações do agendamento
function carregarAgendamento() {
    // Pegar o último agendamento do localStorage
    var agendamentoJSON = localStorage.getItem("ultimoAgendamento");
    
    if (agendamentoJSON == null) {
        alert("Nenhum agendamento encontrado!");
        window.location.href = "escolha_onde_jogar.html";
        return;
    }
    
    // Transformar em objeto
    var agendamento = JSON.parse(agendamentoJSON);
    
    // Pegar os dados do usuário para mostrar o nome
    var emailLogado = agendamento.usuario;
    var usuarios = localStorage.getItem("usuarios");
    var nomeUsuario = emailLogado;
    
    if (usuarios != null) {
        usuarios = JSON.parse(usuarios);
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == emailLogado) {
                nomeUsuario = usuarios[i].nome;
                break;
            }
        }
    }
    
    // Preencher as informações na página
    document.getElementById("nomeQuadra").textContent = agendamento.quadra.nome;
    document.getElementById("localQuadra").textContent = agendamento.quadra.cidade + " - " + agendamento.quadra.estado;
    document.getElementById("enderecoQuadra").textContent = agendamento.quadra.endereco + ", " + agendamento.quadra.bairro;
    
    // Mostrar se é gratuita ou paga
    if (agendamento.quadra.tipo == "gratuita") {
        document.getElementById("valorQuadra").textContent = "Gratuita";
        document.getElementById("valorQuadra").style.color = "#28a745";
        document.getElementById("valorQuadra").style.fontWeight = "bold";
    } else {
        document.getElementById("valorQuadra").textContent = "R$ " + agendamento.quadra.valor;
        document.getElementById("valorQuadra").style.color = "#007dc6";
        document.getElementById("valorQuadra").style.fontWeight = "bold";
    }
    
    document.getElementById("dataAgendamento").textContent = formatarData(agendamento.data);
    document.getElementById("horarioAgendamento").textContent = agendamento.horario;
    document.getElementById("usuarioAgendamento").textContent = nomeUsuario;
}

// Quando a página carregar
window.onload = function() {
    carregarAgendamento();
}