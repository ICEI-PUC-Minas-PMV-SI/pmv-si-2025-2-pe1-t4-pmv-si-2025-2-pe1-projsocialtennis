const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
  document.getElementById('fotoPerfil').src = usuario.foto || 'usuario.png';
  document.getElementById('nomeUsuario').textContent = usuario.nome || '';
  document.getElementById('emailUsuario').textContent = usuario.email || '';
  document.getElementById('enderecoUsuario').textContent = usuario.endereco || '';
}

  let usuario = JSON.parse(localStorage.getItem('usuario')) || {};

  document.getElementById('nome').value = usuario.nome || '';
  document.getElementById('email').value = usuario.email || '';
  document.getElementById('endereco').value = usuario.endereco || '';
  document.getElementById('senha').value = usuario.senha || '';
  document.getElementById('previewFoto').src = usuario.foto || 'usuario.png';

   function mostrarFoto() {
    let arquivo = document.getElementById('foto').files[0];
    if (!arquivo) return; 

    let leitor = new FileReader();
    leitor.onload = function() {
      document.getElementById('previewFoto').src = leitor.result;
    }
    leitor.readAsDataURL(arquivo);
  }

    document.getElementById('formEditar').onsubmit = function(e) {
    e.preventDefault();

    usuario.nome = document.getElementById('nome').value;
    usuario.email = document.getElementById('email').value;
    usuario.endereco = document.getElementById('endereco').value;
    usuario.senha = document.getElementById('senha').value;
    usuario.foto = document.getElementById('previewFoto').src;

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Perfil atualizado com sucesso!');
    window.location.href = 'meuperfil.html';
  }

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario) {
  document.getElementById('fotoPerfil').src = usuario.foto || 'usuario.png';
}
