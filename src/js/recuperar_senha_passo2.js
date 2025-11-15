// Arquivo JavaScript para recuperar senha - Passo 2

// Função que vai ser chamada quando clicar no botão confirmar
function confirmarNovaSenha() {
    // Pegar os valores dos campos
    var novaSenha = document.querySelector('input[placeholder="Digite sua nova senha"]').value;
    var confirmarSenha = document.querySelector('input[placeholder="Digite novamente sua nova senha"]').value;

    // Verificar se os campos estão preenchidos
    if (novaSenha == "" || confirmarSenha == "") {
        alert("Por favor, preencha todos os campos, pois eles são obrigatórios para a recuperação da senha.");
        return;
    }

    // Verificar se as senhas são iguais
    if (novaSenha != confirmarSenha) {
        alert("As senhas não coincidem. Por favor, digite senhas iguais.");
        return;
    }

    // Pegar o email que foi salvo no passo 1
    var emailRecuperacao = localStorage.getItem("emailRecuperacao");

    // Pegar os usuários cadastrados
    var usuarios = localStorage.getItem("usuarios");
    usuarios = JSON.parse(usuarios);

    // Procurar o usuário e atualizar a senha
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == emailRecuperacao) {
            // Atualizar a senha do usuário
            usuarios[i].senha = novaSenha;
            break;
        }
    }

    // Salvar o array atualizado no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Remover o email de recuperação do localStorage
    localStorage.removeItem("emailRecuperacao");

    // Mostrar mensagem de sucesso
    alert("Senha alterada com sucesso!");

    // Redirecionar para a página de login
    window.location.href = "login.html";
}

// Quando a página carregar, adicionar o evento de clique no botão
window.onload = function() {
    var botao = document.querySelector('.padraoButton');
    botao.onclick = confirmarNovaSenha;
}