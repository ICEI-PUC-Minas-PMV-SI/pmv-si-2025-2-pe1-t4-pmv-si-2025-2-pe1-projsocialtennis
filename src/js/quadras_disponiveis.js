// Arquivo JavaScript para mostrar as quadras disponíveis

// Função para criar um card de quadra na tela
function criarCardQuadra(quadra) {
    // Criar o elemento do card
    var card = document.createElement("div");
    card.className = "jogar-card";

    // Criar a imagem (por enquanto um placeholder)
    var imagem = document.createElement("div");
    imagem.className = "jogar-imagem";
    imagem.textContent = "🎾";
    imagem.style.display = "flex";
    imagem.style.alignItems = "center";
    imagem.style.justifyContent = "center";
    imagem.style.fontSize = "2rem";

    // Criar a div de informações
    var info = document.createElement("div");
    info.className = "jogar-info";

    // Adicionar o nome da quadra
    var nome = document.createElement("h3");
    nome.textContent = quadra.nome;

    // Adicionar o endereço
    var endereco = document.createElement("p");
    endereco.textContent = quadra.endereco + ", " + quadra.bairro;

    // Adicionar cidade e estado
    var localizacao = document.createElement("p");
    localizacao.textContent = quadra.cidade + " - " + quadra.estado;

    // Adicionar tipo (gratuita ou paga)
    var tipo = document.createElement("p");
    if (quadra.tipo == "gratuita") {
        tipo.textContent = "Gratuita";
        tipo.style.color = "#28a745";
        tipo.style.fontWeight = "bold";
    } else {
        tipo.textContent = "Valor: R$ " + quadra.valor;
        tipo.style.color = "#007dc6";
        tipo.style.fontWeight = "bold";
    }

    // Adicionar tudo na div de info
    info.appendChild(nome);
    info.appendChild(endereco);
    info.appendChild(localizacao);
    info.appendChild(tipo);

    // Criar o botão de agendar
    var botao = document.createElement("button");
    botao.className = "jogar-botao";
    botao.textContent = "Agendar";
    botao.onclick = function() {
        // Salvar a quadra selecionada
        localStorage.setItem("quadraSelecionada", JSON.stringify(quadra));
        // Redirecionar para a página de agendamento
        window.location.href = "marcar_na_minha_agenda.html";
    };

    // Juntar tudo no card
    card.appendChild(imagem);
    card.appendChild(info);
    card.appendChild(botao);

    return card;
}

// Função principal para buscar e mostrar as quadras
function buscarQuadras() {
    // Pegar os dados da busca do localStorage
    var estadoBusca = localStorage.getItem("estadoBusca");
    var cidadeBusca = localStorage.getItem("cidadeBusca");
    var bairroBusca = localStorage.getItem("bairroBusca");

    // Pegar as quadras cadastradas do localStorage
    var quadras = localStorage.getItem("quadras");

    // Verificar se existem quadras cadastradas
    if (quadras == null || quadras == "[]") {
        // Criar algumas quadras de exemplo se não existir nenhuma
        var quadrasIniciais = [
            {
                nome: "Quadra Ibirapuera",
                endereco: "Av. Pedro Álvares Cabral",
                bairro: "Vila Mariana",
                cidade: "São Paulo",
                estado: "SP",
                tipo: "gratuita",
                valor: "0"
            },
            {
                nome: "Quadra Copacabana",
                endereco: "Av. Atlântica, 1500",
                bairro: "Copacabana",
                cidade: "Rio de Janeiro",
                estado: "RJ",
                tipo: "paga",
                valor: "50"
            },
            {
                nome: "Quadra Aterro do Flamengo",
                endereco: "Parque do Flamengo",
                bairro: "Flamengo",
                cidade: "Rio de Janeiro",
                estado: "RJ",
                tipo: "gratuita",
                valor: "0"
            }
        ];
        localStorage.setItem("quadras", JSON.stringify(quadrasIniciais));
        quadras = JSON.stringify(quadrasIniciais);
    }

    // Transformar o texto em array
    quadras = JSON.parse(quadras);

    // Filtrar as quadras de acordo com a busca
    var quadrasFiltradas = [];
    
    for (var i = 0; i < quadras.length; i++) {
        var quadra = quadras[i];
        
        // Verificar se a cidade e estado são iguais
        var cidadeIgual = quadra.cidade.toLowerCase() == cidadeBusca.toLowerCase();
        var estadoIgual = quadra.estado.toLowerCase() == estadoBusca.toLowerCase();
        
        // Se o bairro foi informado, verificar também
        if (bairroBusca != "" && bairroBusca != null) {
            var bairroIgual = quadra.bairro.toLowerCase() == bairroBusca.toLowerCase();
            if (cidadeIgual && estadoIgual && bairroIgual) {
                quadrasFiltradas.push(quadra);
            }
        } else {
            // Se não informou bairro, buscar só por cidade e estado
            if (cidadeIgual && estadoIgual) {
                quadrasFiltradas.push(quadra);
            }
        }
    }

    // Pegar a div onde vamos colocar as quadras
    var lista = document.querySelector(".jogar-lista");

    // Limpar a lista
    lista.innerHTML = "";

    // Verificar se encontrou quadras
    if (quadrasFiltradas.length == 0) {
        var mensagem = document.createElement("p");
        mensagem.textContent = "Nenhuma quadra encontrada para essa localização.";
        mensagem.style.fontSize = "1.1rem";
        mensagem.style.color = "#666";
        lista.appendChild(mensagem);
    } else {
        // Mostrar as quadras encontradas
        for (var i = 0; i < quadrasFiltradas.length; i++) {
            var card = criarCardQuadra(quadrasFiltradas[i]);
            lista.appendChild(card);
        }
    }
}

// Quando a página carregar, buscar as quadras
window.onload = function() {
    buscarQuadras();
}