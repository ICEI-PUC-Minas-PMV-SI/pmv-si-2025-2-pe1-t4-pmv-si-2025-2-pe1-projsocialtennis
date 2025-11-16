// Arquivo JavaScript para editar quadras

// Variável global para guardar o índice da quadra
var indiceQuadra = -1;
var quadraOriginal = null;

// Função para aplicar máscara de preço
function aplicarMascaraPreco() {
    var campo = document.getElementById("preco");
    var valor = campo.value;
    
    // Remover tudo que não é número
    valor = valor.replace(/\D/g, "");
    
    // Se tiver algum valor
    if (valor.length > 0) {
        // Transformar em centavos
        valor = (valor / 100).toFixed(2);
        // Colocar a máscara de R$
        campo.value = "R$ " + valor;
    }
}

// Função para validar se digitou só números no preço
function validarPreco(event) {
    var tecla = event.key;
    
    // Permitir teclas especiais (Backspace, Delete, setas)
    if (tecla == "Backspace" || tecla == "Delete" || tecla == "ArrowLeft" || tecla == "ArrowRight" || tecla == "Tab") {
        return true;
    }
    
    // Verificar se é número
    if (tecla < "0" || tecla > "9") {
        alert("Por favor, digite apenas números neste campo (exemplo: 50,00).");
        event.preventDefault();
        return false;
    }
}

// Função para aplicar máscara de telefone
function aplicarMascaraTelefone() {
    var campo = document.getElementById("contato");
    var valor = campo.value;
    
    // Remover tudo que não é número
    valor = valor.replace(/\D/g, "");
    
    // Aplicar a máscara conforme a quantidade de números
    if (valor.length <= 10) {
        // Telefone fixo: (XX) XXXX-XXXX
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
        // Celular: (XX) XXXXX-XXXX
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
    
    campo.value = valor;
}

// Função para validar se digitou só números no telefone
function validarTelefone(event) {
    var tecla = event.key;
    
    // Permitir teclas especiais
    if (tecla == "Backspace" || tecla == "Delete" || tecla == "ArrowLeft" || tecla == "ArrowRight" || tecla == "Tab") {
        return true;
    }
    
    // Verificar se é número
    if (tecla < "0" || tecla > "9") {
        event.preventDefault();
        return false;
    }
}

// Função para carregar os dados da quadra nos campos
function carregarDadosQuadra() {
    // Pegar o índice da quadra que foi salvo
    indiceQuadra = localStorage.getItem("quadraParaEditar");
    
    if (indiceQuadra == null) {
        alert("Nenhuma quadra selecionada para editar.");
        window.location.href = "pagina_inicial_gerente.html";
        return;
    }
    
    // Pegar todas as quadras
    var quadras = localStorage.getItem("quadras");
    quadras = JSON.parse(quadras);
    
    // Pegar a quadra específica
    var quadra = quadras[indiceQuadra];
    quadraOriginal = quadra;
    
    // Preencher os campos com os dados da quadra
    document.getElementById("nome").value = quadra.nome;
    
    // Formatar o preço
    if (quadra.tipo == "gratuita" || quadra.valor == "0") {
        document.getElementById("preco").value = "";
    } else {
        var valorFormatado = parseFloat(quadra.valor).toFixed(2);
        document.getElementById("preco").value = "R$ " + valorFormatado;
    }
    
    document.getElementById("horario").value = quadra.horario;
    document.getElementById("contato").value = quadra.contato;
    document.getElementById("estado").value = quadra.estado;
    document.getElementById("cidade").value = quadra.cidade;
    document.getElementById("bairro").value = quadra.bairro;
    document.getElementById("rua").value = quadra.endereco;
    document.getElementById("regras").value = quadra.regras;
    document.getElementById("status").value = quadra.status;
}

// Função para cancelar
function cancelar() {
    // Voltar para a página inicial sem salvar
    window.location.href = "pagina_inicial_gerente.html";
}

// Função para excluir a quadra
function excluirQuadra() {
    // Confirmar se realmente quer excluir
    var confirma = confirm("Tem certeza que deseja excluir esta quadra?");
    
    if (confirma) {
        // Pegar todas as quadras
        var quadras = localStorage.getItem("quadras");
        quadras = JSON.parse(quadras);
        
        // Remover a quadra do array
        quadras.splice(indiceQuadra, 1);
        
        // Salvar o array atualizado
        localStorage.setItem("quadras", JSON.stringify(quadras));
        
        // Remover o índice temporário
        localStorage.removeItem("quadraParaEditar");
        
        // Mostrar mensagem
        alert("Quadra excluída com sucesso!");
        
        // Voltar para a página inicial
        window.location.href = "pagina_inicial_gerente.html";
    }
}

// Função para salvar as alterações
function salvarAlteracoes(event) {
    event.preventDefault();
    
    // Pegar os valores dos campos
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var horario = document.getElementById("horario").value;
    var contato = document.getElementById("contato").value;
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;
    var bairro = document.getElementById("bairro").value;
    var rua = document.getElementById("rua").value;
    var regras = document.getElementById("regras").value;
    var status = document.getElementById("status").value;
    
    // Se algum campo estiver vazio, manter o valor original
    if (nome == "") {
        nome = quadraOriginal.nome;
    }
    if (horario == "") {
        horario = quadraOriginal.horario;
    }
    if (contato == "") {
        contato = quadraOriginal.contato;
    }
    if (estado == "") {
        estado = quadraOriginal.estado;
    }
    if (cidade == "") {
        cidade = quadraOriginal.cidade;
    }
    if (bairro == "") {
        bairro = quadraOriginal.bairro;
    }
    if (rua == "") {
        rua = quadraOriginal.endereco;
    }
    if (regras == "") {
        regras = quadraOriginal.regras;
    }
    
    // Determinar o tipo e valor
    var tipo = "";
    var valor = "";
    
    if (preco == "" || preco == "R$ 0,00" || preco == "R$ 0.00") {
        tipo = "gratuita";
        valor = "0";
    } else {
        tipo = "paga";
        valor = preco.replace("R$ ", "").replace(",", ".");
    }
    
    // Criar objeto atualizado da quadra
    var quadraAtualizada = {
        nome: nome,
        endereco: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        tipo: tipo,
        valor: valor,
        horario: horario,
        contato: contato,
        regras: regras,
        status: status
    };
    
    // Pegar todas as quadras
    var quadras = localStorage.getItem("quadras");
    quadras = JSON.parse(quadras);
    
    // Substituir a quadra antiga pela atualizada
    quadras[indiceQuadra] = quadraAtualizada;
    
    // Salvar no localStorage
    localStorage.setItem("quadras", JSON.stringify(quadras));
    
    // Remover o índice temporário
    localStorage.removeItem("quadraParaEditar");
    
    // Mostrar mensagem de sucesso
    alert("Quadra atualizada com sucesso!");
    
    // Redirecionar para a página inicial do gerente
    window.location.href = "pagina_inicial_gerente.html";
}

// Quando a página carregar
window.onload = function() {
    // Carregar os dados da quadra nos campos
    carregarDadosQuadra();
    
    // Adicionar evento no campo de preço
    var campoPreco = document.getElementById("preco");
    campoPreco.addEventListener("keydown", validarPreco);
    campoPreco.addEventListener("keyup", aplicarMascaraPreco);
    
    // Adicionar evento no campo de telefone
    var campoContato = document.getElementById("contato");
    campoContato.addEventListener("keydown", validarTelefone);
    campoContato.addEventListener("keyup", aplicarMascaraTelefone);
    
    // Adicionar evento no botão cancelar
    var botaoCancelar = document.querySelector(".btn-previsao");
    botaoCancelar.onclick = cancelar;
    
    // Adicionar evento no botão excluir
    var botaoExcluir = document.querySelector(".btn-excluir");
    botaoExcluir.onclick = excluirQuadra;
    
    // Adicionar evento no formulário
    var formulario = document.querySelector(".form-quadra");
    formulario.onsubmit = salvarAlteracoes;
}