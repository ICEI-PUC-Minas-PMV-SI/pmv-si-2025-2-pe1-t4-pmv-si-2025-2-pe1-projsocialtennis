
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

// Alterar a data e horário do agendamento
function alterarAgendamento(indice) {
    // Pegar todos os agendamentos
    var agendamentos = localStorage.getItem("agendamentos");
    agendamentos = JSON.parse(agendamentos);
    
    // Pegar o agendamento que vai ser alterado
    var agendamento = agendamentos[indice];
    
    // Mostrar a data atual formatada
    var dataAtual = formatarData(agendamento.data);
    var horarioAtual = agendamento.horario;
    
    // Perguntar se quer alterar a data
    var novaDataDigitada = prompt("Data atual: " + dataAtual + "\n\nDigite a nova data (formato: DD/MM/AAAA):\n(ou deixe vazio para manter a mesma)");
    
    // Se o usuário cancelou o prompt
    if (novaDataDigitada === null) {
        return;
    }
    
    // Perguntar se quer alterar o horário
    var novoHorario = prompt("Horário atual: " + horarioAtual + "\n\nDigite o novo horário (formato: HH:MM):\n(ou deixe vazio para manter o mesmo)");
    
    // Se o usuário cancelou o prompt
    if (novoHorario === null) {
        return;
    }
    
    // Verificar se digitou uma nova data
    if (novaDataDigitada != "") {
        // Validar o formato da data (DD/MM/AAAA)
        var partesData = novaDataDigitada.split("/");
        
        if (partesData.length != 3) {
            alert("Formato de data inválido! Use DD/MM/AAAA");
            return;
        }
        
        var dia = partesData[0];
        var mes = partesData[1];
        var ano = partesData[2];
        
        // Verificar se são números válidos
        if (dia.length != 2 || mes.length != 2 || ano.length != 4) {
            alert("Formato de data inválido! Use DD/MM/AAAA (exemplo: 15/06/2025)");
            return;
        }
        
        // Converter para o formato do sistema (AAAA-MM-DD)
        var novaDataFormatada = ano + "-" + mes + "-" + dia;
        
        // Verificar se a data é válida
        var dataVerificacao = new Date(novaDataFormatada);
        if (isNaN(dataVerificacao.getTime())) {
            alert("Data inválida! Verifique se o dia e mês estão corretos.");
            return;
        }
        
        // Verificar se a data não é no passado
        var hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        dataVerificacao.setHours(0, 0, 0, 0);
        
        if (dataVerificacao < hoje) {
            alert("Não é possível agendar para uma data que já passou!");
            return;
        }
        
        // Atualizar a data
        agendamento.data = novaDataFormatada;
    }
    
    // Verificar se digitou um novo horário
    if (novoHorario != "") {
        // Validar o formato do horário (HH:MM)
        var partesHorario = novoHorario.split(":");
        
        if (partesHorario.length != 2) {
            alert("Formato de horário inválido! Use HH:MM (exemplo: 14:00)");
            return;
        }
        
        var hora = parseInt(partesHorario[0]);
        var minuto = parseInt(partesHorario[1]);
        
        // Verificar se são números válidos
        if (isNaN(hora) || isNaN(minuto)) {
            alert("Formato de horário inválido! Use HH:MM (exemplo: 14:00)");
            return;
        }
        
        // Verificar se a hora está entre 0 e 23
        if (hora < 0 || hora > 23) {
            alert("Hora inválida! A hora deve ser entre 00 e 23.");
            return;
        }
        
        // Verificar se o minuto está entre 0 e 59
        if (minuto < 0 || minuto > 59) {
            alert("Minuto inválido! O minuto deve ser entre 00 e 59.");
            return;
        }
        
        // Formatar o horário corretamente
        var horaFormatada = hora.toString();
        if (horaFormatada.length == 1) {
            horaFormatada = "0" + horaFormatada;
        }
        
        var minutoFormatado = minuto.toString();
        if (minutoFormatado.length == 1) {
            minutoFormatado = "0" + minutoFormatado;
        }
        
        // Atualizar o horário
        agendamento.horario = horaFormatada + ":" + minutoFormatado;
    }
    
    // Verificar se alguma coisa foi alterada
    if (novaDataDigitada == "" && novoHorario == "") {
        alert("Nenhuma alteração foi feita.");
        return;
    }
    
    // Salvar o agendamento atualizado
    agendamentos[indice] = agendamento;
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
    
    // Mostrar mensagem de sucesso
    alert("Agendamento alterado com sucesso!");
    
    // Recarregar a página para mostrar as alterações
    window.location.reload();
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
    
    // Div para os botões
    var divBotoes = document.createElement("div");
    divBotoes.className = "botoes-agendamento";
    
    // Botão alterar
    var botaoAlterar = document.createElement("button");
    botaoAlterar.textContent = "Alterar data/horário";
    botaoAlterar.className = "btn-alterar";
    botaoAlterar.onclick = function() {
        alterarAgendamento(indice);
    };
    
    // Botão cancelar
    var botaoCancelar = document.createElement("button");
    botaoCancelar.textContent = "Cancelar agendamento";
    botaoCancelar.className = "btn-cancelar";
    botaoCancelar.onclick = function() {
        cancelarAgendamento(indice);
    };
    
    // Adicionar botões na div
    divBotoes.appendChild(botaoAlterar);
    divBotoes.appendChild(botaoCancelar);
    
    // Adicionar tudo na div de informações
    infoAgendamento.appendChild(nomeQuadra);
    infoAgendamento.appendChild(lista);
    infoAgendamento.appendChild(status);
    infoAgendamento.appendChild(divBotoes);
    
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
    
    // Filtrar os agendamentos do usuário 
    var meusAgendamentos = [];
    var indicesOriginais = [];
    
    for (var i = 0; i < agendamentos.length; i++) {
        if (agendamentos[i].usuario == emailLogado) {
            meusAgendamentos.push(agendamentos[i]);
            indicesOriginais.push(i);
        }
    }
    
    var lista = document.getElementById("listaAgendamentos");
    
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
        for (var i = 0; i < meusAgendamentos.length; i++) {
            var card = criarCardAgendamento(meusAgendamentos[i], indicesOriginais[i]);
            lista.appendChild(card);
        }
    }
}

window.onload = function() {
    carregarAgendamentos();
}