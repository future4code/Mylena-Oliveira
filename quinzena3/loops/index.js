/*Exercicio 1

O codigo está no laço FOR, gerando um contador e acrescentando o valor que já esta guardado na variavel valor, 
juntamento com a quantidade

Exercicio 2

a)Será impresso no console todos os números maiores que 18 [19, 21, 23, 25, 27, 30].
b)Será necessário remover o IF que mantém a condição de mostrar somente os números após o 18.

Desafio

O contador iria acrescentar até atingir os 4 caracteres de 0

0
00
000
0000
*/


//Exercicio 3

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


//Resposta Item A

for (let index = 0; index < array.length; index++) {
    // console.log(array[index])
}

//Resposta Item B

for (let index = 0; index < array.length; index++) {
    let divisao = (array[index] / 10)
        // console.log(divisao)

}

//Resposta Item C

for (let index = 0; index < array.length; index++) {

    if (array[index] % 2 === 0) {
        let numeroPares = array[index]
            //console.log(array[index])
    }

}

//Resposta Item D

const arrayFrase = []
for (let i = 0; i < array.length; i++) {
    const string = ("O elemento do item", i, 'e', array[i])
    arrayFrase.push(string);

}
console.log('Array Frase', arrayFrase)

//Resposta Item E
let maiorValor = 0
let menorValor = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorValor) {
        maiorValor = array[i]
    } else if (array[i] < menorValor) {
        menorValor = array[i]
    }
}

console.log("O maior valor é", maiorValor, "E o menor valor é:", menorValor)