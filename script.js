var navegacao = document.querySelector(".navegacao");

navegacao.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
});


document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value;
    if(prazo > 1)
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
    else
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`;
    atualizarPreco();
});

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    const incluiLayout = document.querySelector("#layout-sim").checked;
    const prazo = document.querySelector("#prazo").value;

    let preco = qtde * 100;
    if (temJS)
        preco *= 1.1;
    if (incluiLayout)
        preco += 500;

    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = `Preço= R$ ${preco.toFixed(2)}`;
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
/**/
    function loading(){
        sleep(2000);
        document.getElementsByClassName("box-load")[0].style.display="none";
        document.getElementsByClassName('container')[0].style.display="block";
    }

