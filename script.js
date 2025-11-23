document.addEventListener("DOMContentLoaded", () => {
  const inputBusca = document.getElementById("input-busca");
  const botaoMostrarTodos = document.getElementById("botao-mostrar-todos");
  const cardContainer = document.querySelector(".card-container");
  let todosOsCaes = [];

  // 1. Carrega os dados do arquivo JSON
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      todosOsCaes = data;
      exibirMensagemInicial(); // Exibe a mensagem de boas-vindas
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados dos cães:", error)
    );

  // Função para exibir a mensagem de boas-vindas
  function exibirMensagemInicial() {
    cardContainer.innerHTML = `
      <p style="font-size: 1.2rem; text-align: center;">
        Bem-vindo ao Guia de Raças! Use a barra de busca para encontrar uma raça ou clique em "Mostrar Todos" para ver a lista completa.
      </p>`;
  }

  // 2. Função para criar e exibir os cards na tela
  function renderizarCards(caes) {
    cardContainer.innerHTML = ""; // Limpa os resultados anteriores

    if (caes.length === 0) {
      cardContainer.innerHTML = "<p>Nenhuma raça encontrada.</p>";
      return;
    }

    caes.forEach((cao) => {
      const article = document.createElement("article");

      // Cria o HTML para as tags, se existirem
      const tagsHtml =
        cao.tags && cao.tags.length > 0
          ? `<div class="tags-container">
               ${cao.tags
                 .map((tag) => `<span class="tag">${tag}</span>`)
                 .join("")}
             </div>`
          : "";

      article.innerHTML = `
        <img class="card-imagem" src="${cao.imagem}" alt="Foto de um ${cao.raca}">
        <div class="card-content">
          <h2>${cao.raca}</h2>
          <p><strong>Função:</strong> ${cao.funcao}</p>
          <p><strong>Cuidado:</strong> ${cao.cuidado}</p>
          <p><strong>Origem:</strong> ${cao.ano}</p>
          <a href="${cao.link}" target="_blank" rel="noopener noreferrer">Saiba mais na Wikipedia</a>
          ${tagsHtml}
        </div>
      `;
      cardContainer.appendChild(article);
    });
  }

  // 3. Função de busca (chamada pelo botão e pelo input)
  window.iniciarBusca = function () {
    const termoBusca = inputBusca.value.toLowerCase().trim();

    if (termoBusca === "") {
      exibirMensagemInicial(); // Se a busca estiver vazia, mostra a mensagem inicial
      return;
    }

    // AQUI ESTÁ A LÓGICA PRINCIPAL: Filtra os cães
    const caesFiltrados = todosOsCaes.filter((cao) => {
      // Verifica se o nome da raça corresponde
      const racaMatch = cao.raca.toLowerCase().includes(termoBusca);

      // Verifica se ALGUMA das tags corresponde
      const tagMatch =
        cao.tags &&
        cao.tags.some((tag) => tag.toLowerCase().includes(termoBusca));

      // Retorna verdadeiro se o nome OU alguma tag corresponderem
      return racaMatch || tagMatch;
    });

    renderizarCards(caesFiltrados);
  };

  // 4. Função para o botão "Mostrar Todos"
  window.mostrarTodos = function () {
    renderizarCards(todosOsCaes);
  };

  // Adiciona a funcionalidade de busca ao pressionar a tecla "Enter" no campo de input
  inputBusca.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      iniciarBusca();
    }
  });
});
