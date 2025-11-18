// Arquivo JavaScript para escolher onde jogar

// Função para ir para a página de previsão do tempo
function irParaPrevisao() {
    // Pegar os valores dos campos
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;
    var bairro = document.getElementById("bairro").value;

    // Salvar os dados no localStorage (mesmo que estejam vazios)
    localStorage.setItem("estadoBusca", estado);
    localStorage.setItem("cidadeBusca", cidade);
    localStorage.setItem("bairroBusca", bairro);

    // Redirecionar para a página de previsão do tempo
    window.location.href = "previsao_do_tempo.html";
}

// Função para escolher e buscar quadras
function escolherQuadras() {
    // Pegar os valores dos campos
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;
    var bairro = document.getElementById("bairro").value;

    // Verificar se os campos obrigatórios estão preenchidos
    if (estado == "" || cidade == "") {
        alert("Por favor, preencha todos os campos obrigatórios (CIDADE e ESTADO).");
        return;
    }

    // Salvar os dados no localStorage para usar na próxima página
    localStorage.setItem("estadoBusca", estado);
    localStorage.setItem("cidadeBusca", cidade);
    localStorage.setItem("bairroBusca", bairro);

    // Redirecionar para a página de quadras disponíveis
    window.location.href = "quadras_disponiveis.html";
}

// Quando a página carregar, adicionar os eventos nos botões
window.onload = function() {
    // Botão de previsão do tempo
    var botaoPrevisao = document.getElementById("btn-previsao");
    botaoPrevisao.onclick = irParaPrevisao;

    // Botão de escolher
    var botaoEscolher = document.getElementById("btnEscolher");
    botaoEscolher.onclick = escolherQuadras;
}