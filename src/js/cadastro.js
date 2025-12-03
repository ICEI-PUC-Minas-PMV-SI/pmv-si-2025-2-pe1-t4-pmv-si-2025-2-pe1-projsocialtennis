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