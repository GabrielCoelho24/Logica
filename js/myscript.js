
function mudarFrase() {
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";

    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/a.jpg\' />"
}

function trocarClasse() {
    var fraseAtual = document.getElementById("frase");
    fraseAtual.className = "h1_2";
}

var nome = "Wanderson"

console.log ("o nome é =" + nome)

function trocarTexto() {
    var elemento = document.getElementById("frase")
    var nova = document.getElementById("novafrase").value


    elemento.innerHTML = nova
}