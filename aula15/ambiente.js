let num = [5, 8, 3]
num[3] = 6
num.push(7) // Adiciona no final
console.log(num.length) // Conta a quantidade de elementos
console.log(num)
console.log(num.sort()) // Ordena os valores
console.log(`O valor 6 está na posição ${num.indexOf(6)}`) // Encontra a posição do valor
/*
for (c = 0; c < num.length; c = c + 1){
    console.log(num[c])
}
*/
for (c in num){
    console.log(num[c])
}
