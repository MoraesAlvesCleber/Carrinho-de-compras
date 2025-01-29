let produto = document.getElementById('produto');
let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');
let quantidadeProdutos = document.getElementById('quantidade');
function adicionar(){ 
    alert(quantidadeProdutos.value);

    let quantidade = document.createElement('span');
    quantidade.className = 'texto-azul';
    quantidade.textContent = `${quantidadeProdutos.value}x`;


    let preco = document.createElement("span");
    preco.className = "texto-azul";
    preco.textContent = "R$1400";


    let textoProduto = document.createTextNode(" Celular ");

    carrinhoProdutos.appendChild(quantidade);
    carrinhoProdutos.appendChild(textoProduto);
    carrinhoProdutos.appendChild(preco);
    carrinhoProdutos.appendChild(document.createElement("br"));

     
}