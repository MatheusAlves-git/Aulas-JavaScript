function fatorial(valor) {
    let fat = 1
    for(let c = valor; c > 1; c = c - 1){
        fat = fat * c
        console.log(fat)
    }
    return console.log(fat)
}

fatorial(5)