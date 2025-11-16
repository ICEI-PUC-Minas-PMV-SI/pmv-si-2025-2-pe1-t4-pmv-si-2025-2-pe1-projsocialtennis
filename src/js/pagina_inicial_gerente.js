// Arquivo JavaScript para a página inicial do gerente

// Função para criar um card de quadra
function criarCardQuadra(quadra, index) {
    // Criar container principal do card com nome
    var container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "8px";
    
    // Criar o elemento do card
    var card = document.createElement("div");
    card.className = "quadra-card";
    
    // Colocar o emoji de tênis no card (ou foto se tiver)
    card.textContent = "🎾";
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    card.style.fontSize = "2.5rem";
    
    // Criar elemento para o nome da quadra
    var nomeQuadra = document.createElement("p");
    nomeQuadra.textContent = quadra.nome;
    nomeQuadra.style.fontSize = "0.9rem";
    nomeQuadra.style.fontWeight = "600";
    nomeQuadra.style.color = "#333";
    nomeQuadra.style.textAlign = "center";
    nomeQuadra.style.maxWidth = "110px";
    nomeQuadra.style.wordWrap = "break-word";
    
    // Quando clicar no card, ir para a página de editar
    card.onclick = function() {
        // Salvar o índice da quadra no localStorage
        localStorage.setItem("quadraParaEditar", index);
        // Redirecionar para a página de editar
        window.location.href = "editar_quadras.html";
    };
    
    // Adicionar o card e o nome no container
    container.appendChild(card);
    container.appendChild(nomeQuadra);
    
    return container;
}

// Função para mostrar as quadras do gerente
function mostrarQuadras() {
    // Pegar as quadras do localStorage
    var quadras = localStorage.getItem("quadras");
    
    // Se não tiver quadras, criar algumas de exemplo
    if (quadras == null || quadras == "[]") {
        var quadrasIniciais = [
            {
                nome: "Quadra Ibirapuera",
                endereco: "Av. Pedro Álvares Cabral",
                bairro: "Vila Mariana",
                cidade: "São Paulo",
                estado: "SP",
                tipo: "gratuita",
                valor: "0",
                horario: "08:00 às 18:00",
                contato: "(11) 98888-8888",
                regras: "Uso livre, respeitar horários",
                status: "Ativa"
            },
            {
                nome: "Quadra Copacabana",
                endereco: "Av. Atlântica, 1500",
                bairro: "Copacabana",
                cidade: "Rio de Janeiro",
                estado: "RJ",
                tipo: "paga",
                valor: "50",
                horario: "07:00 às 20:00",
                contato: "(21) 97777-7777",
                regras: "Pagamento antecipado",
                status: "Ativa"
            },
            {
                nome: "Quadra Aterro",
                endereco: "Parque do Flamengo",
                bairro: "Flamengo",
                cidade: "Rio de Janeiro",
                estado: "RJ",
                tipo: "gratuita",
                valor: "0",
                horario: "06:00 às 22:00",
                contato: "(21) 96666-6666",
                regras: "Uso livre",
                status: "Inativa"
            }
        ];
        localStorage.setItem("quadras", JSON.stringify(quadrasIniciais));
        quadras = JSON.stringify(quadrasIniciais);
    }
    
    // Transformar o texto em array
    quadras = JSON.parse(quadras);
    
    // Pegar as divs onde vamos colocar as quadras
    var divAtivas = document.querySelector(".quadras-ativas");
    var divInativas = document.querySelector(".quadras-desativadas");
    
    // Limpar as divs
    divAtivas.innerHTML = "";
    divInativas.innerHTML = "";
    
    // Variáveis para contar quantas quadras ativas e inativas existem
    var totalAtivas = 0;
    var totalInativas = 0;
    
    // Percorrer todas as quadras
    for (var i = 0; i < quadras.length; i++) {
        var quadra = quadras[i];
        
        // Criar o card da quadra com nome
        var cardContainer = criarCardQuadra(quadra, i);
        
        // Verificar o status e colocar na div correta
        if (quadra.status == "Ativa") {
            divAtivas.appendChild(cardContainer);
            totalAtivas++;
        } else if (quadra.status == "Inativa") {
            divInativas.appendChild(cardContainer);
            totalInativas++;
        }
    }
    
    // Se não tiver quadras ativas, mostrar mensagem
    if (totalAtivas == 0) {
        var mensagem = document.createElement("p");
        mensagem.textContent = "Nenhuma quadra ativa no momento";
        mensagem.style.color = "#666";
        mensagem.style.fontSize = "0.95rem";
        divAtivas.appendChild(mensagem);
    }
    
    // Se não tiver quadras inativas, mostrar mensagem
    if (totalInativas == 0) {
        var mensagem = document.createElement("p");
        mensagem.textContent = "Nenhuma quadra desativada";
        mensagem.style.color = "#666";
        mensagem.style.fontSize = "0.95rem";
        divInativas.appendChild(mensagem);
    }
}

// Quando a página carregar, mostrar as quadras
window.onload = function() {
    mostrarQuadras();
}