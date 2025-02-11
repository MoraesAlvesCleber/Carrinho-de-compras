
function adicionar() {
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    let mensagemErro = document.getElementById('mensagem-erro');

    if (isNaN(quantidade) || quantidade === 0) {
        mensagemErro.textContent = "Digite a quantidade!";
        return;
    }
    if (quantidade > 10) {
        mensagemErro.textContent = "Máximo 10."
        return;
    } else {
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');

        //alert(nomeProduto);
        //alert(valorUnitario);
        //alert(quantidade);
        //lert(produto);
        //alert(quantidade);

        let spanQuantidadeProdutos = document.createElement('span');
        spanQuantidadeProdutos.className = 'texto-azul';
        spanQuantidadeProdutos.textContent = `${quantidade}x `;

        let spanPreco = document.createElement("span");
        spanPreco.textContent = `${nomeProduto}`;

        let spanValorUnitario = document.createElement("span");
        spanValorUnitario.className = "texto-azul";
        spanValorUnitario.textContent = `R$${multiplicar()}`;

        carrinhoProdutos.appendChild(spanQuantidadeProdutos);
        carrinhoProdutos.appendChild(spanPreco);
        carrinhoProdutos.appendChild(spanValorUnitario);


        spanValorUnitario.appendChild(document.createElement("br"));
        carrinho();
        mensagemErro.textContent = "";

    }
}

function multiplicar() {
    let produto = document.getElementById('produto').value;
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    return quantidade * valorUnitario;
}
function limpar() {
    let mensagemErro = document.getElementById('mensagem-erro');
    let carrinhoProdutos = document.querySelector('.carrinho__produtos__produto');
    let valorTotalElemento = document.getElementById('valor-total'); 
    let quantidade =document.getElementById('quantidade');
    valorTotalElemento.innerHTML = '';
    carrinhoProdutos.innerHTML = '';
    quantidade.value = '';
    mensagemErro.textContent = "";
}
function carrinho() {
    let valorTotalElemento = document.getElementById('valor-total'); // Pegando o elemento correto

    // Removendo "R$" e convertendo para número
    let valorTotal = parseFloat(valorTotalElemento.textContent.replace("R$", "").trim()) || 0;

    let valorUnitario = multiplicar(); // Calculando o novo valor unitário

    // Atualizando o valor total no elemento com "R$"
    valorTotalElemento.textContent = `R$${(valorTotal + valorUnitario).toFixed(2)}`;
}



