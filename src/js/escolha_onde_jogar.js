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
    if (estado == "") {
        alert("Por favor, selecione o estado.");
        document.getElementById("estado").focus();
        return;
    }
    
    if (cidade == "") {
        alert("Por favor, preencha a cidade.");
        document.getElementById("cidade").focus();
        return;
    }

    // Salvar os dados no localStorage para usar na próxima página
    localStorage.setItem("estadoBusca", estado);
    localStorage.setItem("cidadeBusca", cidade);
    localStorage.setItem("bairroBusca", bairro);

    // página de quadras disponíveis
    window.location.href = "quadras_disponiveis.html";
}
window.onload = function() {
    // Botão de previsão do tempo
    var botaoPrevisao = document.getElementById("btn-previsao");
    botaoPrevisao.onclick = irParaPrevisao;

    // Botão de escolher
    var botaoEscolher = document.getElementById("btnEscolher");
    botaoEscolher.onclick = escolherQuadras;
}