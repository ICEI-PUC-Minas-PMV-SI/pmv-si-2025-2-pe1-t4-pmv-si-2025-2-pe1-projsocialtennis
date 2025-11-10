console.log("[Quadras Disponíveis] JS carregado");

const quadrasDisponiveis = [
  {
    nome: "Quadra A",
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Vila Mariana",
    endereco: "Rua X, xxx",
    preco: "R$30/hora"
  },
  {
    nome: "Quadra B",
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Butantã",
    endereco: "Rua Y, xxx",
    preco: "R$25/hora"
  },
  {
    nome: "Quadra C",
    estado: "RJ",
    cidade: "Rio de Janeiro",
    bairro: "Copacabana",
    endereco: "Av Atlântica, xxx",
    preco: "R$40/hora"
  },
  {
    nome: "Quadra D",
    estado: "MG",
    cidade: "Belo Horizonte",
    bairro: "Lourdes",
    endereco: "Av Contorno, xxx",
    preco: "Grátis"
  },
  {
    nome: "Quadra E",
    estado: "MG",
    cidade: "Belo Horizonte",
    bairro: "Savassi",
    endereco: "R. Rio Grande do Norte, xxx",
    preco: "Grátis"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".jogar-lista");

  if (!container) {
    console.error("Elemento .jogar-lista não encontrado no HTML.");
    return;
  }

  const local = JSON.parse(localStorage.getItem("localizacao")) || {};

  // Filtro flexível: só aplica o que o usuário informou
  const filtradas = quadrasDisponiveis.filter(q => {
    const estadoOk = !local.estado || q.estado.toLowerCase() === local.estado.toLowerCase();
    const cidadeOk = !local.cidade || q.cidade.toLowerCase() === local.cidade.toLowerCase();
    const bairroOk = !local.bairro || q.bairro.toLowerCase() === local.bairro.toLowerCase();
    return estadoOk && cidadeOk && bairroOk;
  });

  if (filtradas.length === 0) {
    container.innerHTML = "<p>Nenhuma quadra encontrada para essa localização.</p>";
    return;
  }

  // Renderizar quadras
  filtradas.forEach(quadra => {
    const card = document.createElement("div");
    card.classList.add("jogar-card");
    card.innerHTML = `
      <div class="jogar-info">
        <h3>${quadra.nome}</h3>
        <p><strong>Cidade:</strong> ${quadra.cidade}</p>
        <p><strong>Bairro:</strong> ${quadra.bairro}</p>
        <p><strong>Endereço:</strong> ${quadra.endereco}</p>
        <p><strong>Preço:</strong> ${quadra.preco}</p>
      </div>
      <a href="marcar_na_minha_agenda.html">
        <button class="jogar-botao">Agendar</button>
      </a>
    `;
    container.appendChild(card);
  });
});
