let cardContainer = document.querySelector(".card-container");
let dados = [];
const inputBusca = document.getElementById("input-busca");

// Função para carregar os dados do JSON apenas uma vez
async function carregarDados() {
  try {
    let resposta = await fetch("data.json");
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }
    dados = await resposta.json();
    renderizarCards(dados); // Renderiza todos os cards inicialmente
  } catch (error) {
    console.error("Falha ao carregar os dados:", error);
    cardContainer.innerHTML = `<p class="erro">Não foi possível carregar os dados. Tente recarregar a página.</p>`;
  }
}

// Função que é chamada pelo botão "Buscar"
function iniciarBusca() {
  // Pega o valor digitado no input, em minúsculas para busca não sensível a maiúsculas/minúsculas
  const termoBusca = inputBusca.value.toLowerCase().trim();

  // Verifica se o campo de busca está vazio
  if (termoBusca === "") {
    cardContainer.innerHTML = `<p class="erro">Por favor, digite o nome de uma raça para buscar.</p>`;
    return; // Encerra a função para não executar o resto do código
  }

  // Filtra os dados com base no termo de busca, se o termo não estiver vazio
  // A busca verifica se a raça (em minúsculas) inclui o termo digitado
  const dadosFiltrados = dados.filter((dado) =>
    dado.raca.toLowerCase().includes(termoBusca)
  );

  renderizarCards(dadosFiltrados);
}

function renderizarCards(listaDeCards) {
  cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar os novos

  if (listaDeCards.length === 0) {
    cardContainer.innerHTML = `<p class="erro">Nenhum resultado encontrado para "${inputBusca.value}"</p>`;
    return; // Encerra a função aqui se não houver cards para renderizar
  }

  for (let dado of listaDeCards) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = ` 
     <img
        src="${dado.imagem}"
        alt="Foto de um ${dado.raca}"
        class="card-imagem"
      />
     <h2>${dado.raca}</h2>
      <p>${dado.ano}</p>
      <p>${dado.funcao}</p>
      <p>${dado.cuidado}</p>
      <a
      href=${dado.link}
      target="_blank"
      rel="noopener noreferrer"
      >Saiba mais</a>`;
    cardContainer.appendChild(article);
  }
}

// Adiciona um "ouvinte de evento" para a tecla Enter no campo de busca
inputBusca.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    iniciarBusca();
  }
});

// Chama a função para carregar os dados assim que o script for executado
carregarDados();
