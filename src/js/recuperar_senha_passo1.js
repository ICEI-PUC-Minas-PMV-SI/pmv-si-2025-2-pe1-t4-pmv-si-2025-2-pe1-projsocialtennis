// Função que vai ser chamada quando clicar no botão continuar
function verificarEmail() {
    // Pegar o valor do campo de email
    var email = document.querySelector('input[placeholder="Digite seu e-mail"]').value;

    // Verificar se o campo está preenchido
    if (email == "") {
        alert("Por favor, preencha o campo obrigatório para a recuperação da sua senha.");
        return;
    }

    // Pegar os usuários cadastrados do localStorage
    var usuarios = localStorage.getItem("usuarios");

    // Se não tiver nenhum usuário cadastrado
    if (usuarios == null) {
        alert("E-mail não encontrado. Por favor, verifique se você digitou corretamente.");
        return;
    }

    // Transformar o texto do localStorage em array
    usuarios = JSON.parse(usuarios);

    // Variável para saber se encontrou o email
    var emailEncontrado = false;

    // Procurar o email no array de usuários
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            emailEncontrado = true;
            break;
        }
    }

    // Se encontrou o email
    if (emailEncontrado) {
        // Salvar o email no localStorage para usar no próximo passo
        localStorage.setItem("emailRecuperacao", email);
        
        // Redirecionar para a página do passo 2
        window.location.href = "recuperar_senha_passo2.html";
    } else {
        // Se não encontrou o email
        alert("E-mail não encontrado. Por favor, verifique se você digitou corretamente.");
    }
}

// Quando a página carregar, adicionar o evento de clique no botão
window.onload = function() {
    var botao = document.querySelector('.padraoButton');
    botao.onclick = verificarEmail;
}