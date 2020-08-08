pizza = 10

do {
    console.log(`Total de fatias: ${pizza}`)
    console.log('Comendo uma fatia!')
    pizza = pizza - 1
    if (pizza == 0) {
        console.log('Você comeu a pizza inteira!')
    }
} while (pizza > 0)



/*
pizza = 10
while (pizza > 0){
    console.log(`Total de Fatias: ${pizza}`)
    console.log('Comendo uma fatia!')
    pizza = pizza - 1
    if (pizza == 0){
        console.log(`Você comeu a pizza inteira!`)
    }
}
*/