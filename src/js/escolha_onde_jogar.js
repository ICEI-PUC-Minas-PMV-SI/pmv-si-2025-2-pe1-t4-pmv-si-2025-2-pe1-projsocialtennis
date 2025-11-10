console.log("[Escolha Onde Jogar] JS carregado");

document.addEventListener("DOMContentLoaded", () => {
  const btnEscolher = document.getElementById("btnEscolher");

  if (!btnEscolher) {
    console.error("❌ Botão 'Escolher' não encontrado.");
    return;
  }

  btnEscolher.addEventListener("click", () => {
    const estado = document.getElementById("estado")?.value || "";
    const cidade = document.getElementById("cidade")?.value || "";
    const bairro = document.getElementById("bairro")?.value || "";

    // Salva no localStorage
    localStorage.setItem("localizacao", JSON.stringify({ estado, cidade, bairro }));

    // Redireciona
    window.location.href = "quadras_disponiveis.html";
  });
});
