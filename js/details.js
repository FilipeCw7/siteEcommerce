const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

async function carregarDetalhesProduto(productId) {
    const response = await fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`);
    const productData = await response.json();
  
    const formattedDescription = productData.description.replace("<br>");

    // Atualizar os elementos HTML com os dados do produto
    document.querySelector('#listaDetails img').src = productData.image;
    document.querySelector('#listaDetails h4').textContent = productData.title;
    document.querySelector('#listaDetails h5').textContent = productData.category;
    document.querySelector('#listaDetails h6').textContent = productData.season;
    document.querySelector('#listaDetails h3').textContent = `R$ ${productData.price}`;
    document.querySelector('#listaDetails p').innerHTML = formattedDescription;
}
  
  
  document.addEventListener("DOMContentLoaded", function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    carregarDetalhesProduto(productId);
  });