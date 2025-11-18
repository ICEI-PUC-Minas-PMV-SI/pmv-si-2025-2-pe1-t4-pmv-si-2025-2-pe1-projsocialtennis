// Arquivo JavaScript para mostrar os agendamentos do usuário

// Função para formatar a data
function formatarData(data) {
    var partes = data.split("-");
    var ano = partes[0];
    var mes = partes[1];
    var dia = partes[2];
    return dia + "/" + mes + "/" + ano;
}

// Função para cancelar um agendamento
function cancelarAgendamento(indice) {
    // Perguntar se tem certeza
    var confirmacao = confirm("Tem certeza que quer cancelar seu agendamento?");
    
    if (confirmacao) {
        // Se clicou em sim
        
        // Pegar todos os agendamentos
        var agendamentos = localStorage.getItem("agendamentos");
        agendamentos = JSON.parse(agendamentos);
        
        // Remover o agendamento do array
        agendamentos.splice(indice, 1);
        
        // Salvar de volta no localStorage
        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
        
        // Mostrar mensagem de sucesso
        alert("Cancelamento realizado com sucesso!");
        
        // Recarregar a página para atualizar a lista
        window.location.reload();
    } else {
        // Se clicou em não, não faz nada
        return;
    }
}

// Função para criar um card de agendamento
function criarCardAgendamento(agendamento, indice) {
    // Criar o card
    var card = document.createElement("div");
    card.className = "caixa-agendamento";
    
    // Criar a foto/ícone do local
    var fotoLocal = document.createElement("div");
    fotoLocal.className = "fotolocal";
    fotoLocal.textContent = "🎾";
    fotoLocal.style.fontSize = "3rem";
    fotoLocal.style.display = "flex";
    fotoLocal.style.alignItems = "center";
    fotoLocal.style.justifyContent = "center";
    
    // Criar a div de informações
    var infoAgendamento = document.createElement("div");
    infoAgendamento.className = "info-agendamento";
    
    // Nome da quadra
    var nomeQuadra = document.createElement("p");
    nomeQuadra.innerHTML = "<strong>" + agendamento.quadra.nome + "</strong>";
    nomeQuadra.style.fontSize = "1.2rem";
    
    // Lista de informações
    var lista = document.createElement("ul");
    
    var itemData = document.createElement("li");
    itemData.innerHTML = "Data: " + formatarData(agendamento.data);
    
    var itemHorario = document.createElement("li");
    itemHorario.innerHTML = "Horário: " + agendamento.horario;
    
    var itemEndereco = document.createElement("li");
    itemEndereco.textContent = "Endereço: " + agendamento.quadra.endereco + ", " + agendamento.quadra.bairro;
    
    var itemCidade = document.createElement("li");
    itemCidade.textContent = "Cidade: " + agendamento.quadra.cidade + " - " + agendamento.quadra.estado;
    
    var itemContato = document.createElement("li");
    if (agendamento.quadra.contato) {
        itemContato.textContent = "Contato: " + agendamento.quadra.contato;
    } else {
        itemContato.textContent = "Contato: Não informado";
    }
    
    var itemValor = document.createElement("li");
    if (agendamento.quadra.tipo == "gratuita") {
        itemValor.innerHTML = "Valor entrada: Gratuito";
        itemValor.style.color = "#28a745";
        itemValor.style.fontWeight = "bold";
    } else {
        itemValor.innerHTML = "Valor entrada: R$ " + agendamento.quadra.valor;
        itemValor.style.color = "#007dc6";
        itemValor.style.fontWeight = "bold";
    }
    
    // Adicionar itens na lista
    lista.appendChild(itemData);
    lista.appendChild(itemHorario);
    lista.appendChild(itemEndereco);
    lista.appendChild(itemCidade);
    lista.appendChild(itemContato);
    lista.appendChild(itemValor);
    
    // Status
    var status = document.createElement("span");
    status.className = "status";
    status.textContent = "Agendado";
    status.style.color = "#28a745";
    
    // Botão cancelar
    var botaoCancelar = document.createElement("button");
    botaoCancelar.textContent = "Cancelar agendamento";
    botaoCancelar.onclick = function() {
        cancelarAgendamento(indice);
    };
    
    // Adicionar tudo na div de informações
    infoAgendamento.appendChild(nomeQuadra);
    infoAgendamento.appendChild(lista);
    infoAgendamento.appendChild(status);
    infoAgendamento.appendChild(botaoCancelar);
    
    // Juntar tudo no card
    card.appendChild(fotoLocal);
    card.appendChild(infoAgendamento);
    
    return card;
}

// Função para carregar os agendamentos do usuário
function carregarAgendamentos() {
    // Pegar o email do usuário logado
    var emailLogado = localStorage.getItem("usuarioLogado");
    
    if (emailLogado == null) {
        alert("Você precisa fazer login primeiro!");
        window.location.href = "login.html";
        return;
    }
    
    // Pegar todos os agendamentos
    var agendamentos = localStorage.getItem("agendamentos");
    
    if (agendamentos == null) {
        agendamentos = [];
    } else {
        agendamentos = JSON.parse(agendamentos);
    }
    
    // Filtrar apenas os agendamentos do usuário logado
    var meusAgendamentos = [];
    var indicesOriginais = [];
    
    for (var i = 0; i < agendamentos.length; i++) {
        if (agendamentos[i].usuario == emailLogado) {
            meusAgendamentos.push(agendamentos[i]);
            indicesOriginais.push(i);
        }
    }
    
    // Pegar a div onde vamos colocar os agendamentos
    var lista = document.getElementById("listaAgendamentos");
    
    // Limpar a lista
    lista.innerHTML = "";
    
    // Verificar se tem agendamentos
    if (meusAgendamentos.length == 0) {
        var mensagem = document.createElement("p");
        mensagem.textContent = "Você ainda não tem agendamentos.";
        mensagem.style.fontSize = "1.1rem";
        mensagem.style.color = "#666";
        mensagem.style.textAlign = "center";
        mensagem.style.marginTop = "40px";
        lista.appendChild(mensagem);
    } else {
        // Mostrar os agendamentos
        for (var i = 0; i < meusAgendamentos.length; i++) {
            var card = criarCardAgendamento(meusAgendamentos[i], indicesOriginais[i]);
            lista.appendChild(card);
        }
    }
}

// Quando a página carregar
window.onload = function() {
    carregarAgendamentos();
}