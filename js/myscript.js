
function mudarFrase() {
    var elemento = gebi("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";

    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/a.jpg\' />"
}

function trocarClasse() {
    var fraseAtual = gebi("frase");
    fraseAtual.className = "h1_2";
}

var nome = "Wanderson"

console.log ("o nome é =" + nome)

function trocarTexto() {
    var elemento = gebi("frase")
    var nova = gebi("novafrase").value


    elemento.innerHTML = nova
}

function gebi(id) {
    return document.getElementById(id)
}