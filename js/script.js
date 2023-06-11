document.addEventListener("DOMContentLoaded", function(event) {
console.log("Carregou");
carregarProdutos();
});


async function  carregarProdutos() {
    const response = await fetch("https://diwserver.vps.webdock.cloud/products");
    const jsonData = await response.json();
    console.log(jsonData);
    popularProdutos(jsonData.products)
  }
  
function popularProdutos(produtos){
    var listaProdutos=document.getElementById("listaProdutos");
    for(let i=0;i<produtos.length;i++){
        console.log(produtos[i].id);
        listaProdutos.innerHTML+=`<a class="content-card" href="details.html?id=${produtos[i].id}">
        <div class="card" data-id="${produtos[i].id}" >
        <img
          src="${produtos[i].image}"
          class="card-img-top"
          alt="Carregador Portátil"
        />
        <div class="card-body">
          <span>${produtos[i].title}</span>
          <br />
          <p class="card-rating">
            <i class="bi-star-fill"></i>
            <i class="bi-star-fill"></i>
            <i class="bi-star-fill"></i>
            <i class="bi-star-fill"></i>
            <i class="bi-star"></i>
          </p>
          <h1>R$ ${produtos[i].price}</h1>
        </div>
      </div>
      </a> `
    }
}

document.getElementById('input-search').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase(); // Obter o termo de pesquisa e converter para minúsculas
  const cards = document.getElementsByClassName('card'); // Obter todos os elementos com a classe "card"

  // Percorrer os cards e mostrar apenas aqueles que correspondem ao termo de pesquisa
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const title = card.querySelector('.card-body span').textContent.toLowerCase(); // Obter o título do produto e converter para minúsculas

    // Verificar se o título do produto contém o termo de pesquisa
    if (title.includes(searchTerm)) {
      card.style.display = 'block'; // Mostrar o card
    } else {
      card.style.display = 'none'; // Ocultar o card
    }
  }
});
