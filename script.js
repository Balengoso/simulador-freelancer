// TESTE: verifica se o JS está carregando
console.log("JS carregado");

// Seleciona todos os checkboxes
const botoesAdicionar = document.querySelectorAll('.adicionar');
console.log("Checkbox encontrados:", botoesAdicionar.length);

// Seleciona lista e total
const listaPedido = document.getElementById('lista-pedido');
const totalElemento = document.getElementById('total');

let total = 0;

// Percorre todos os checkboxes
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("change", () => {
        console.log("Evento disparado");

        const produto = botao.parentElement;

        const nome = produto.querySelector("h3").textContent;
        const precoTexto = produto.querySelector('.preco').textContent;

        console.log("Produto:", nome);
        console.log("Texto preço:", precoTexto);

        const preco = parseFloat(precoTexto.replace("R$", ""));
        console.log("Preço convertido:", preco);

        if (botao.checked) {
            console.log("Marcado");

            const itemPedido = document.createElement('li');
            itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
            itemPedido.setAttribute("data-nome", nome);

            listaPedido.appendChild(itemPedido);
            total += preco;

        } else {
            console.log("Desmarcado");

            const item = listaPedido.querySelector(`[data-nome="${nome}"]`);
            if (item) item.remove();

            total -= preco;
        }

        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
        console.log("Total atual:", total);
    });
});

// Botão finalizar
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener("click", () => {
    console.log("Finalizar clicado");

    alert("Orçamento finalizado: " + totalElemento.textContent);

    listaPedido.innerHTML = "";
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});

window.addEventListener("scroll", () => {
    const banner = document.querySelector(".banner");

    if (window.scrollY > 50) {
        banner.classList.add("pequeno");
    } else {
        banner.classList.remove("pequeno");
    }
});