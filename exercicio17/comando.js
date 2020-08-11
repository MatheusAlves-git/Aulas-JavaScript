function capturar(){
    var capturando = document.getElementById('val_entrada').value
    
    for(linha = 0; linha < 10; linha = linha + 1){
        var saida = document.getElementById('caixa_text')   
        var novo_elemento = document.createElement("option")
        var texto = document.createTextNode(' ')
        novo_elemento.appendChild(texto)
        saida.appendChild(novo_elemento)
        
    }
}