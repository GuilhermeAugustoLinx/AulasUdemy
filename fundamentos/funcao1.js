// Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//NaN = not a number
imprimirSoma(2, 3, 4, 5, 6, 7, 8)

//Funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(som(2))
console.log(soma())//NaN

