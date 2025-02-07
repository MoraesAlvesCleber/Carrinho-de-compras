
function multiplicar() {
   
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    
 

    return quantidade * valorUnitario;
}


function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat( produto.split('R$')[1]);
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');

    //alert(nomeProduto);
    //alert(valorUnitario);
    //alert(quantidade);
    //lert(produto);
    //alert(quantidade);
    if (quantidade == "" | quantidade == 0) {
        alert('Digite a quantidade!')
        if (quantidade > 20) {
            alert('limite excedido')
        }
    } else {

        let spanQuantidadeProdutos = document.createElement('span');
        spanQuantidadeProdutos.className = 'texto-azul';
        spanQuantidadeProdutos.textContent = `${quantidade}x `;

        let spanPreco = document.createElement("span");
        spanPreco.textContent = `${nomeProduto}`;

        let spanValorUnitario = document.createElement("span");
        spanValorUnitario.className = "texto-azul";
        spanValorUnitario.textContent = `R$${valorUnitario}`;

        carrinhoProdutos.appendChild(spanQuantidadeProdutos);
        carrinhoProdutos.appendChild(spanPreco);
        carrinhoProdutos.appendChild(spanValorUnitario);


        spanValorUnitario.appendChild(document.createElement("br"));
        multiplicar();
        alert(multiplicar());


    }
}
function limpar() {
    let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');
    carrinhoProdutos.innerHTML = '';
}
 