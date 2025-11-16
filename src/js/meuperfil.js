// Arquivo JavaScript para meu perfil

// Função para carregar as informações do usuário
function carregarPerfil() {
    // Pegar o email do usuário logado
    var emailLogado = localStorage.getItem("usuarioLogado");
    
    // Se não tiver usuário logado, redirecionar para login
    if (emailLogado == null || emailLogado == "") {
        alert("Você precisa fazer login primeiro!");
        window.location.href = "login.html";
        return;
    }
    
    // Pegar todos os usuários cadastrados
    var usuarios = localStorage.getItem("usuarios");
    
    if (usuarios == null) {
        alert("Nenhum usuário encontrado. Faça seu cadastro!");
        window.location.href = "cadastro.html";
        return;
    }
    
    // Transformar em array
    usuarios = JSON.parse(usuarios);
    
    // Procurar o usuário logado
    var usuarioEncontrado = null;
    
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == emailLogado) {
            usuarioEncontrado = usuarios[i];
            break;
        }
    }
    
    // Se encontrou o usuário, mostrar as informações
    if (usuarioEncontrado != null) {
        document.getElementById("nomeUsuario").textContent = usuarioEncontrado.nome;
        document.getElementById("emailUsuario").textContent = usuarioEncontrado.email;
    } else {
        alert("Usuário não encontrado!");
        window.location.href = "login.html";
    }
}

// Quando a página carregar
window.onload = function() {
    carregarPerfil();
}