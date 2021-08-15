/*
EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
1-o codigo cria uma loop, que pega a variavel valor zerada, e vai acrescentando com a quantidade
de loop que o código cria, totalizando 10. Joga a variavel i, somando com o valor que ja tem existente,
até que realize 5x.

2-
A)O console irá mostrar somente números maiores que 18.

EXERCICIOS DE ESCRITA DE CÓDIGO
1 -
A)
*/
const quantidade = prompt("Quantos animais de estimação você tem?")
let totalPet = []
for (let i = 0; i <= quantidade; i++) {
    const nome = prompt("Digite o nome de todos os pets:")
    totalPet.push(nome)

}
console.log(totalPet)


//2-
//a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const tamanhoArray = arrayOriginal.length

function impressaoArray(array) {
    let i = 0
    while (i < tamanhoArray) {
        console.log(array[i])
        i++
    }
}
impressaoArray(arrayOriginal)

//b)
function impressaoArrayDivididoDez(array) {
    let i = 0
    while (i < tamanhoArray) {
        console.log(array[i] / 10)
        i++
    }
}
impressaoArrayDivididoDez(arrayOriginal)

//c)
function impressaoArrayPares(array) {
    let i = 0
    let arrayPar = []
    while (i < tamanhoArray) {
        if (array[i] % 2 === 0) {
            arrayPar.push(array[i])
        }
        i++
    }
    console.log(arrayPar)
}
impressaoArrayPares(arrayOriginal)
    //d)

function arrayString(array) {
    const arrayFrase = []
    for (let i = 0; i < array.length; i++) {
        console.log("O elemento do item", i, 'e', array[i])
    }
}
arrayString(arrayOriginal)

//e)
function comparacaoArray(array) {
    let maiorValor = 0
    let menorValor = 999
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i]
        } else if (array[i] <= menorValor) {
            menorValor = array[i]
        }
    }
    console.log("O maior valor é", maiorValor, "E o menor valor é:", menorValor)
}

comparacaoArray(arrayOriginal)