// Arquivo JavaScript para editar perfil do gerente

// Variáveis globais
var emailLogado = "";
var usuarioOriginal = null;

// Função para carregar os dados atuais do usuário
function carregarDadosUsuario() {
    // Pegar o email do usuário logado
    emailLogado = localStorage.getItem("usuarioLogado");
    
    // Se não tiver usuário logado, redirecionar para login
    if (emailLogado == null || emailLogado == "") {
        alert("Você precisa fazer login primeiro!");
        window.location.href = "login.html";
        return;
    }
    
    // Pegar todos os usuários cadastrados
    var usuarios = localStorage.getItem("usuarios");
    
    if (usuarios == null) {
        alert("Nenhum usuário encontrado!");
        window.location.href = "login.html";
        return;
    }
    
    // Transformar em array
    usuarios = JSON.parse(usuarios);
    
    // Procurar o usuário logado
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == emailLogado) {
            usuarioOriginal = usuarios[i];
            break;
        }
    }
    
    // Se encontrou, preencher os campos
    if (usuarioOriginal != null) {
        document.getElementById("nomeUsuarioTopo").textContent = usuarioOriginal.nome;
        document.getElementById("nome").value = usuarioOriginal.nome;
        document.getElementById("email").value = usuarioOriginal.email;
        // Deixar o campo senha vazio por segurança
        document.getElementById("senha").value = "";
    } else {
        alert("Usuário não encontrado!");
        window.location.href = "login.html";
    }
}

// Função para salvar as alterações
function salvarAlteracoes(event) {
    event.preventDefault();
    
    // Pegar os valores dos campos
    var novoNome = document.getElementById("nome").value;
    var novoEmail = document.getElementById("email").value;
    var novaSenha = document.getElementById("senha").value;
    
    // Se algum campo estiver vazio, manter o valor original
    if (novoNome == "") {
        novoNome = usuarioOriginal.nome;
    }
    
    if (novoEmail == "") {
        novoEmail = usuarioOriginal.email;
    }
    
    if (novaSenha == "") {
        novaSenha = usuarioOriginal.senha;
    }
    
    // Pegar todos os usuários
    var usuarios = localStorage.getItem("usuarios");
    usuarios = JSON.parse(usuarios);
    
    // Procurar e atualizar o usuário
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == emailLogado) {
            // Atualizar os dados
            usuarios[i].nome = novoNome;
            usuarios[i].email = novoEmail;
            usuarios[i].senha = novaSenha;
            break;
        }
    }
    
    // Salvar o array atualizado no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    // Se o email foi alterado, atualizar o usuarioLogado também
    if (novoEmail != emailLogado) {
        localStorage.setItem("usuarioLogado", novoEmail);
    }
    
    // Mostrar mensagem de sucesso
    alert("Alterações salvas com sucesso!");
    
    // Redirecionar para a página de perfil do gerente
    window.location.href = "meuperfil_gerente.html";
}

// Quando a página carregar
window.onload = function() {
    // Carregar os dados do usuário
    carregarDadosUsuario();
    
    // Adicionar evento no formulário
    var formulario = document.getElementById("formEditarPerfil");
    formulario.onsubmit = salvarAlteracoes;
}