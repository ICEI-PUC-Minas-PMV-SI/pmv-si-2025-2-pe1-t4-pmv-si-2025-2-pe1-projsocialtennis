// Arquivo JavaScript para previsão do tempo

// Chave da API OpenWeatherMap (gratuita para fins educacionais)
var API_KEY = "754ccc95f9cb9909992d59b20e42efd7";

// Função para buscar os dados salvos da busca de quadras
function carregarDadosBusca() {
    var cidade = localStorage.getItem("cidadeBusca");
    var estado = localStorage.getItem("estadoBusca");
    
    if (cidade && cidade != "") {
        document.getElementById("cidade").value = cidade;
    }
    
    if (estado && estado != "") {
        document.getElementById("estado").value = estado;
    }
}

// Função para traduzir descrição do clima
function traduzirClima(descricao) {
    var traducoes = {
        "clear sky": "Céu limpo",
        "few clouds": "Poucas nuvens",
        "scattered clouds": "Nuvens dispersas",
        "broken clouds": "Nuvens quebradas",
        "overcast clouds": "Nublado",
        "shower rain": "Chuva rápida",
        "rain": "Chuva",
        "light rain": "Chuva leve",
        "moderate rain": "Chuva moderada",
        "heavy rain": "Chuva forte",
        "thunderstorm": "Tempestade",
        "snow": "Neve",
        "mist": "Névoa",
        "fog": "Neblina",
        "haze": "Neblina"
    };
    
    var descricaoLower = descricao.toLowerCase();
    
    for (var chave in traducoes) {
        if (descricaoLower.includes(chave)) {
            return traducoes[chave];
        }
    }
    
    return descricao;
}

// Função para escolher o ícone baseado na descrição
function escolherIcone(descricao) {
    var descricaoLower = descricao.toLowerCase();
    
    if (descricaoLower.includes("clear")) {
        return "☀️";
    } else if (descricaoLower.includes("cloud")) {
        return "☁️";
    } else if (descricaoLower.includes("rain")) {
        return "🌧️";
    } else if (descricaoLower.includes("thunder")) {
        return "⛈️";
    } else if (descricaoLower.includes("snow")) {
        return "❄️";
    } else if (descricaoLower.includes("mist") || descricaoLower.includes("fog") || descricaoLower.includes("haze")) {
        return "🌫️";
    } else {
        return "🌤️";
    }
}

// Função para buscar o clima
function buscarClima() {
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    
    // Verificar se os campos foram preenchidos
    if (cidade == "") {
        alert("Por favor, digite o nome da cidade!");
        return;
    }
    
    // Limpar espaços extras
    cidade = cidade.trim();
    estado = estado.trim();
    
    // Esconder mensagem de erro e card anterior
    var mensagemErro = document.getElementById("mensagemErro");
    var cardClima = document.getElementById("cardClima");
    
    if (mensagemErro) {
        mensagemErro.style.display = "none";
    }
    if (cardClima) {
        cardClima.style.display = "none";
    }
    
    // Montar o nome da cidade
    var nomeCidade = cidade;
    if (estado != "") {
        nomeCidade = cidade + "," + estado + ",BR";
    } else {
        nomeCidade = cidade + ",BR";
    }
    
    // URL da API
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(nomeCidade) + "&appid=" + API_KEY + "&units=metric&lang=pt_br";
    
    console.log("Buscando clima para: " + nomeCidade);
    console.log("URL da API: " + url);
    
    // Fazer a requisição para a API
    fetch(url)
        .then(function(response) {
            console.log("Status da resposta: " + response.status);
            if (!response.ok) {
                throw new Error("Cidade não encontrada");
            }
            return response.json();
        })
        .then(function(data) {
            console.log("Dados recebidos:", data);
            
            // Pegar os dados do clima
            var temperatura = Math.round(data.main.temp);
            var descricao = data.weather[0].description;
            var umidade = data.main.humidity;
            var sensacao = Math.round(data.main.feels_like);
            var velocidadeVento = data.wind.speed;
            
            // Traduzir a descrição
            var descricaoTraduzida = traduzirClima(descricao);
            
            // Escolher o ícone
            var icone = escolherIcone(descricao);
            
            // Atualizar o card com os dados
            document.getElementById("localClima").textContent = data.name + ", " + data.sys.country;
            document.getElementById("iconeClima").textContent = icone;
            document.getElementById("temperatura").textContent = temperatura + "°C";
            document.getElementById("descricaoClima").textContent = descricaoTraduzida;
            document.getElementById("detalhesClima").innerHTML = 
                "Sensação térmica: " + sensacao + "°C<br>" +
                "Umidade: " + umidade + "%<br>" +
                "Vento: " + velocidadeVento + " m/s";
            
            // Mostrar o card
            document.getElementById("cardClima").style.display = "flex";
        })
        .catch(function(erro) {
            console.log("Erro ao buscar clima:", erro);
            // Mostrar mensagem de erro
            var mensagemErro = document.getElementById("mensagemErro");
            if (mensagemErro) {
                mensagemErro.textContent = "Não foi possível encontrar a previsão do tempo para esta cidade. Verifique o nome e tente novamente.";
                mensagemErro.style.display = "block";
            }
        });
}

// Quando a página carregar
window.onload = function() {
    console.log("Página carregada!");
    
    // Verificar se os elementos existem
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var botaoBuscar = document.getElementById("btnBuscarClima");
    
    if (!cidade || !estado || !botaoBuscar) {
        console.log("ERRO: Elementos não encontrados!");
        console.log("Cidade:", cidade);
        console.log("Estado:", estado);
        console.log("Botão:", botaoBuscar);
        return;
    }
    
    // Carregar dados da busca se existirem
    carregarDadosBusca();
    
    // Adicionar evento no botão de buscar
    botaoBuscar.onclick = buscarClima;
    
    // Permitir buscar apertando Enter
    cidade.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            buscarClima();
        }
    });
    
    estado.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            buscarClima();
        }
    });
    
    console.log("Eventos configurados com sucesso!");
}
