
function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');

    //alert(nomeProduto);
    //alert(valorUnitario);
    //alert(quantidade);
    //lert(produto);
    //alert(quantidade);
    if (quantidade == ""| quantidade == 0) {
        alert('Digite a quantidade!')
    } else {

        let spanQuantidadeProdutos = document.createElement('span');
        spanQuantidadeProdutos.className = 'texto-azul';
        spanQuantidadeProdutos.textContent = `${quantidade}x `;

        let spanPreco = document.createElement("span");
        spanPreco.textContent = `${nomeProduto}`;

        let spanValorUnitario = document.createElement("span");
        spanValorUnitario.className = "texto-azul";
        spanValorUnitario.textContent = `R$${valorUnitario}`;


        //let textoProduto = document.createTextNode(" Celular ");
        //let multiplicacao = document.createTextNode(" x ");


        carrinhoProdutos.appendChild(spanQuantidadeProdutos);
        carrinhoProdutos.appendChild(spanPreco);
        carrinhoProdutos.appendChild(spanValorUnitario);


        spanValorUnitario.appendChild(document.createElement("br"));


    }
}