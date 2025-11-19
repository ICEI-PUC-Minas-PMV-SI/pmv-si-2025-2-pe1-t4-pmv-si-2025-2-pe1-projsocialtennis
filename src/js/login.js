// Arquivo JavaScript para a página de login

// Função que vai ser chamada quando clicar no botão de entrar
function fazerLogin() {
    // Pegar os valores dos campos
    var email = document.querySelector('input[placeholder="E-mail"]').value;
    var senha = document.querySelector('input[placeholder="Senha"]').value;

    // Verificar se os campos estão preenchidos
    if (email == "" || senha == "") {
        alert("Por favor, preencha todos os campos, pois eles são obrigatórios para a conclusão do seu login.");
        return;
    }

    // Pegar os usuários cadastrados do localStorage
    var usuarios = localStorage.getItem("usuarios");

    // Se não tiver nenhum usuário cadastrado
    if (usuarios == null) {
        alert("Usuário não encontrado. Por favor, cadastre-se primeiro.");
        return;
    }

    // Transformar o texto do localStorage em array
    usuarios = JSON.parse(usuarios);

    // Variável para saber se encontrou o usuário
    var usuarioEncontrado = false;
    var perfilUsuario = "";

    // Procurar o usuário no array
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email && usuarios[i].senha == senha) {
            usuarioEncontrado = true;
            perfilUsuario = usuarios[i].perfil;
            break;
        }
    }

    // Se encontrou o usuário
    if (usuarioEncontrado) {
        // Salvar o email do usuário logado no localStorage
        localStorage.setItem("usuarioLogado", email); 
        
        // Redirecionar baseado no perfil
        if (perfilUsuario == "iniciante") {
            // Se for tenista, vai para escolha onde jogar
            window.location.href = "escolha_onde_jogar.html";
        } else if (perfilUsuario == "intermediario") {
            // Se for gerente de quadra, vai para página inicial do gerente
            window.location.href = "pagina_inicial_gerente.html";
        }
    } else {
        // Se não encontrou o usuário
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
}

// Quando a página carregar, adicionar o evento de clique no botão
window.onload = function() {
    var botao = document.querySelector('.padraoButton');
    botao.onclick = fazerLogin;
}