let produtoCarrinho = document.getElementById('produto');
let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');
let quantidadeProdutos = document.getElementById('quantidade');
function adicionar() {
    alert(produto.value);

    let spanProdutos = document.createElement('span');
    spanProdutos.className = 'texto-azul';
    spanProdutos.textContent = `${quantidadeProdutos.value}x`;


    let spanPreco = document.createElement("span");
    spanPreco.className = "texto-azul";
    spanPreco.textContent = `${produtoCarrinho.value}`;


    //let textoProduto = document.createTextNode(" Celular ");
    //let multiplicacao = document.createTextNode(" x ");


    carrinhoProdutos.appendChild(spanProdutos);
    carrinhoProdutos.appendChild(spanPreco);


    spanPreco.appendChild(document.createElement("br"));


}