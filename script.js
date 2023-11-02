// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Soparia & Cia";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Temos a melhor sopa da região.</h2>
    <img src="https://cooknenjoy.com/wp-content/uploads/2019/06/sopa-carne-01.jpg" width="200px" alt="sopa de carne">
    <p>Sopa de carne com legumes.</p>
    <p id="preco-sopa">R$ 14.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)