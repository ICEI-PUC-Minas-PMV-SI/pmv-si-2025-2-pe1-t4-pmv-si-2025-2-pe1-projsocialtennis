// Arquivo JavaScript para a página de cadastro

// Função que vai ser chamada quando clicar no botão de criar conta
function criarConta() {
    // Pegar os valores dos campos
    var nome = document.querySelector('input[placeholder="Nome"]').value;
    var email = document.querySelector('input[placeholder="E-mail"]').value;
    var senha = document.querySelector('input[placeholder="Senha"]').value;
    var perfil = document.querySelector('.formularioSelect').value;

    // Verificar se todos os campos estão preenchidos
    if (nome == "" || email == "" || senha == "" || perfil == "") {
        alert("Por favor, preencha todos os campos, pois eles são obrigatórios para a conclusão do seu cadastro.");
        return;
    }

    // Criar um objeto com os dados do usuário
    var usuario = {
        nome: nome,
        email: email,
        senha: senha,
        perfil: perfil
    };

    // Pegar os usuários que já existem no localStorage (se tiver)
    var usuarios = localStorage.getItem("usuarios");
    
    // Se não tiver nenhum usuário ainda, criar um array vazio
    if (usuarios == null) {
        usuarios = [];
    } else {
        // Se já tiver usuários, transformar de texto para array
        usuarios = JSON.parse(usuarios);
    }

    // Adicionar o novo usuário no array
    usuarios.push(usuario);

    // Salvar o array de volta no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Mostrar mensagem de sucesso
    alert("Conta criada com sucesso!");

    // Redirecionar para a página de login
    window.location.href = "login.html";
}

// Quando a página carregar, adicionar o evento de clique no botão
window.onload = function() {
    var botao = document.querySelector('.padraoButton');
    botao.onclick = criarConta;
}

// Arquivo JavaScript para a página de cadastro

// Funcao para verificar se a senha e forte
function verificarSenhaForte(senha) {
    // Verificar se tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }
    
    // Verificar se tem letra maiuscula
    var temMaiuscula = false;
    for (var i = 0; i < senha.length; i++) {
        if (senha[i] >= 'A' && senha[i] <= 'Z') {
            temMaiuscula = true;
            break;
        }
    }
    if (temMaiuscula == false) {
        return false;
    }
    
    // Verificar se tem letra minuscula
    var temMinuscula = false;
    for (var i = 0; i < senha.length; i++) {
        if (senha[i] >= 'a' && senha[i] <= 'z') {
            temMinuscula = true;
            break;
        }
    }
    if (temMinuscula == false) {
        return false;
    }
    
    // Verificar se tem numero
    var temNumero = false;
    for (var i = 0; i < senha.length; i++) {
        if (senha[i] >= '0' && senha[i] <= '9') {
            temNumero = true;
            break;
        }
    }
    if (temNumero == false) {
        return false;
    }
    
    // Verificar se tem caractere especial
    var caracteresEspeciais = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    var temEspecial = false;
    for (var i = 0; i < senha.length; i++) {
        for (var j = 0; j < caracteresEspeciais.length; j++) {
            if (senha[i] == caracteresEspeciais[j]) {
                temEspecial = true;
                break;
            }
        }
        if (temEspecial == true) {
            break;
        }
    }
    if (temEspecial == false) {
        return false;
    }
    
    // Se passou por todas as verificacoes, a senha e forte
    return true;
}

// Função que vai ser chamada quando clicar no botão de criar conta
function criarConta() {
    // Pegar os valores dos campos
    var nome = document.querySelector('input[placeholder="Nome"]').value;
    var email = document.querySelector('input[placeholder="E-mail"]').value;
    var senha = document.querySelector('input[placeholder="Senha"]').value;
    var perfil = document.querySelector('.formularioSelect').value;

    // Verificar se todos os campos estão preenchidos
    if (nome == "" || email == "" || senha == "" || perfil == "") {
        alert("Por favor, preencha todos os campos, pois eles são obrigatórios para a conclusão do seu cadastro.");
        return;
    }

    // Verificar se a senha e forte
    if (verificarSenhaForte(senha) == false) {
        alert("A senha precisa ter pelo menos 8 caracteres, incluindo:\n- Uma letra maiúscula\n- Uma letra minúscula\n- Um número\n- Um caractere especial (!@#$%^&*...)");
        return;
    }

    // Criar um objeto com os dados do usuário
    var usuario = {
        nome: nome,
        email: email,
        senha: senha,
        perfil: perfil
    };

    // Pegar os usuários que já existem no localStorage (se tiver)
    var usuarios = localStorage.getItem("usuarios");
    
    // Se não tiver nenhum usuário ainda, criar um array vazio
    if (usuarios == null) {
        usuarios = [];
    } else {
        // Se já tiver usuários, transformar de texto para array
        usuarios = JSON.parse(usuarios);
    }

    // Adicionar o novo usuário no array
    usuarios.push(usuario);

    // Salvar o array de volta no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Mostrar mensagem de sucesso
    alert("Conta criada com sucesso!");

    // Redirecionar para a página de login
    window.location.href = "login.html";
}

// Funcao para mostrar dica de senha enquanto digita
function mostrarDicaSenha() {
    var senha = document.querySelector('input[placeholder="Senha"]').value;
    var divDica = document.getElementById("dicaSenha");
    
    // Se a div de dica nao existir, criar ela
    if (divDica == null) {
        divDica = document.createElement("div");
        divDica.id = "dicaSenha";
        divDica.style.fontSize = "12px";
        divDica.style.marginTop = "5px";
        divDica.style.color = "#666";
        
        var campoSenha = document.querySelector('input[placeholder="Senha"]');
        campoSenha.parentNode.insertBefore(divDica, campoSenha.nextSibling);
    }
    
    // Verificar cada requisito
    var temMinimo = senha.length >= 8;
    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
    var temEspecial = false;
    
    for (var i = 0; i < senha.length; i++) {
        if (senha[i] >= 'A' && senha[i] <= 'Z') temMaiuscula = true;
        if (senha[i] >= 'a' && senha[i] <= 'z') temMinuscula = true;
        if (senha[i] >= '0' && senha[i] <= '9') temNumero = true;
    }
    
    var caracteresEspeciais = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    for (var i = 0; i < senha.length; i++) {
        for (var j = 0; j < caracteresEspeciais.length; j++) {
            if (senha[i] == caracteresEspeciais[j]) {
                temEspecial = true;
                break;
            }
        }
    }
    
    // Mostrar os requisitos com cores
    var texto = "";
    texto += "<span style='color:" + (temMinimo ? "green" : "red") + "'>✓ Mínimo 8 caracteres</span><br>";
    texto += "<span style='color:" + (temMaiuscula ? "green" : "red") + "'>✓ Letra maiúscula</span><br>";
    texto += "<span style='color:" + (temMinuscula ? "green" : "red") + "'>✓ Letra minúscula</span><br>";
    texto += "<span style='color:" + (temNumero ? "green" : "red") + "'>✓ Número</span><br>";
    texto += "<span style='color:" + (temEspecial ? "green" : "red") + "'>✓ Caractere especial (!@#$%...)</span>";
    
    divDica.innerHTML = texto;
}

// Quando a página carregar, adicionar o evento de clique no botão
window.onload = function() {
    var botao = document.querySelector('.padraoButton');
    botao.onclick = criarConta;
    
    // Adicionar evento para mostrar dica de senha enquanto digita
    var campoSenha = document.querySelector('input[placeholder="Senha"]');
    campoSenha.onkeyup = mostrarDicaSenha;
}