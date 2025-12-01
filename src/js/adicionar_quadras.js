// Arquivo JavaScript para adicionar quadras

// Funcao para verificar se ja existe uma quadra com esse nome
function verificarNomeQuadraExistente(nomeQuadra) {
    // Pegar todas as quadras do localStorage
    var quadras = localStorage.getItem("quadras");
    
    // Se nao tiver nenhuma quadra, retorna false (nao existe)
    if (quadras == null) {
        return false;
    }
    
    // Transformar em array
    quadras = JSON.parse(quadras);
    
    // Procurar se ja existe uma quadra com esse nome
    for (var i = 0; i < quadras.length; i++) {
        // Comparar os nomes em minusculo para evitar problemas
        var nomeExistente = quadras[i].nome.toLowerCase();
        var nomeNovo = nomeQuadra.toLowerCase();
        
        if (nomeExistente == nomeNovo) {
            return true; // Ja existe uma quadra com esse nome
        }
    }
    
    return false; // Nao existe quadra com esse nome
}

// Funcao para verificar nome em tempo real enquanto digita
function verificarNomeEmTempoReal() {
    var nome = document.getElementById("nome").value;
    var avisoNome = document.getElementById("avisoNome");
    
    // Se o aviso nao existir, criar ele
    if (avisoNome == null) {
        avisoNome = document.createElement("span");
        avisoNome.id = "avisoNome";
        avisoNome.style.fontSize = "12px";
        avisoNome.style.marginLeft = "10px";
        avisoNome.style.display = "block";
        avisoNome.style.marginTop = "5px";
        
        var campoNome = document.getElementById("nome");
        campoNome.parentNode.appendChild(avisoNome);
    }
    
    // Se o nome estiver vazio, limpar o aviso
    if (nome == "") {
        avisoNome.innerHTML = "";
        return;
    }
    
    // Verificar se o nome ja existe
    if (verificarNomeQuadraExistente(nome) == true) {
        avisoNome.innerHTML = "⚠️ Este nome já está em uso!";
        avisoNome.style.color = "red";
    } else {
        avisoNome.innerHTML = "✓ Nome disponível";
        avisoNome.style.color = "green";
    }
}

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

// Função para cancelar
function cancelar() {
    // Redirecionar para a página inicial do gerente sem salvar nada
    window.location.href = "pagina_inicial_gerente.html";
}

// Função para adicionar a quadra
function adicionarQuadra(event) {
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
    
    // Validar se os campos obrigatórios foram preenchidos
    if (nome == "" || estado == "" || cidade == "" || bairro == "" || rua == "" || horario == "" || contato == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    
    // VERIFICAR SE JA EXISTE UMA QUADRA COM ESSE NOME
    if (verificarNomeQuadraExistente(nome) == true) {
        alert("Já existe uma quadra cadastrada com este nome!\n\nPor favor, escolha um nome diferente para sua quadra.");
        document.getElementById("nome").focus();
        return;
    }
    
    // Determinar o tipo e valor
    var tipo = "";
    var valor = "";
    
    if (preco == "" || preco == "R$ 0,00" || preco == "R$ 0.00") {
        tipo = "gratuita";
        valor = "0";
    } else {
        tipo = "paga";
        // Extrair só o número do preço
        valor = preco.replace("R$ ", "").replace(",", ".");
    }
    
    // Criar objeto da quadra
    var quadra = {
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
    
    // Pegar as quadras do localStorage
    var quadras = localStorage.getItem("quadras");
    
    if (quadras == null) {
        quadras = [];
    } else {
        quadras = JSON.parse(quadras);
    }
    
    // Adicionar  nova quadra
    quadras.push(quadra);
    
    // Salvar no localStorage
    localStorage.setItem("quadras", JSON.stringify(quadras));
    
    // Mostrar mensagem de sucesso
    alert("Nova quadra adicionada com sucesso.");
    
    // Redirecionar para a página inicial do gerente
    window.location.href = "pagina_inicial_gerente.html";
}

// Quando a página carregar
window.onload = function() {
    // Campo de preço
    var campoPreco = document.getElementById("preco");
    campoPreco.addEventListener("keydown", validarPreco);
    campoPreco.addEventListener("keyup", aplicarMascaraPreco);
    
    // Campo de telefone
    var campoContato = document.getElementById("contato");
    campoContato.addEventListener("keydown", validarTelefone);
    campoContato.addEventListener("keyup", aplicarMascaraTelefone);
    
    // Botão cancelar
    var botaoCancelar = document.querySelector(".btn-previsao");
    botaoCancelar.onclick = cancelar;
    
    // Formulário
    var formulario = document.querySelector(".form-quadra");
    formulario.onsubmit = adicionarQuadra;
    
    // Adicionar evento para verificar nome em tempo real
    var campoNome = document.getElementById("nome");
    campoNome.addEventListener("keyup", verificarNomeEmTempoReal);
    campoNome.addEventListener("blur", verificarNomeEmTempoReal);
}