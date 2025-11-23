# Guia de Raças de Cães



## Sobre o Projeto

O **Guia de Raças de Cães** é uma aplicação web interativa desenvolvida como parte da **Imersão Dev da Alura**. O objetivo é fornecer uma interface amigável e funcional para explorar, pesquisar e aprender sobre diversas raças de cachorros. A aplicação consome dados de um arquivo JSON local e os apresenta em formato de cards, permitindo buscas dinâmicas por nome e características.

Este projeto demonstra a manipulação do DOM com JavaScript, o consumo de dados com a API Fetch, a criação de layouts responsivos com CSS moderno (Flexbox) e a implementação de uma lógica de busca inteligente utilizando tags.

---

## Funcionalidades Principais

-   **Busca Inteligente:** Pesquise raças pelo nome ou por características específicas (tags), como "apartamento", "guarda" ou "alta energia".
-   **Exibição Completa:** Um botão "Mostrar Todos" permite visualizar todas as raças cadastradas de uma só vez.
-   **Interface Dinâmica:** Os resultados da busca são renderizados instantaneamente na tela sem a necessidade de recarregar a página.
-   **Cards Detalhados:** Cada raça é apresentada em um card com imagem, nome, função, cuidados, origem e tags de características.
-   **Layout Responsivo:** A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
-   **Design Uniforme:** Todos os cards mantêm a mesma altura, garantindo um grid visualmente alinhado e agradável.
-   **Links Externos:** Cada card contém um link para a página da Wikipedia da respectiva raça para mais informações.

---

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **HTML5:** Para a estrutura semântica da página.
-   **CSS3:** Para estilização, utilizando variáveis, Flexbox para o layout e Media Queries para responsividade.
-   **JavaScript (ES6+):** Para toda a lógica da aplicação, incluindo:
    -   Manipulação do DOM para criar e atualizar os cards.
    -   Uso da **API Fetch** para carregar os dados do arquivo `data.json`.
    -   Implementação dos eventos de clique e teclado para a funcionalidade de busca.
-   **JSON:** Como formato para armazenar e estruturar os dados das raças.

---

## Estrutura do Projeto

├── index.html # Arquivo principal da estrutura HTML 
├── style.css # Folha de estilos principal 
├── script.js # Lógica da aplicação em JavaScript 
├── data.json # Banco de dados com as informações das raças 
└── README.md # Esta documentação