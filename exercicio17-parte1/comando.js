function capturar(){
    var capturando = document.getElementById('val_entrada').value
    var texto = document.createTextNode(`Valor ${capturando} foi adicionado!`)
    var saida = document.getElementById('caixa_text')   
    var novo_elemento = document.createElement("option")
    novo_elemento.appendChild(texto)
    saida.appendChild(novo_elemento)
}

function finalizar(){
    var saida = document.body
    var texto = document.createTextNode(`testando`)
    var novo_elemento = document.createElement("option")
    novo_elemento.appendChild(texto)
    saida.appendChild(novo_elemento)
}