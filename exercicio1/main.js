var agora = new Date()
var hora = agora.getHours()
console.log(hora)
if (hora >= 6){
    if (hora < 12){
        console.log('Manhã')
        document.body.style.backgroundColor = '#ffff94'
        document.getElementById('quadrado').innerHTML = `<h1>Agora são ${hora} horas</h1>`
        document.getElementById('circulo').style.backgroundImage = "url(imagens/manha.jpg)"
    }
    
} if (hora >= 12){
    if (hora < 18){
        document.body.style.backgroundColor = '#87cefa'
        document.getElementById('quadrado').innerHTML = `<h1>Agora são ${hora} horas</h1>`
        document.getElementById('circulo').style.backgroundImage = "url(imagens/tarde.jpg)"
    }
    
} if (hora >= 0){
    if (hora < 6){
        console.log('Madrugada')
        document.body.style.backgroundColor = '#3a1ebc'
        document.getElementById('quadrado').innerHTML = `<h1>Agora são ${hora} horas</h1>`
        document.getElementById('circulo').style.backgroundImage = "url(imagens/madrugada.jpg)"
    }

} if (hora >= 18){
    console.log('Noite')
    document.body.style.backgroundColor = '#150824'
    document.getElementById('quadrado').innerHTML = `<h1>Agora são ${hora} horas</h1>`
    document.getElementById('circulo').style.backgroundImage = "url(imagens/noite.jpg)"
}
