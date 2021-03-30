/*1- 10, 5;
2- 10,10,10


*/
//Exercicio 1

var nome
var idade

const tipoNome = typeof nome
const tipoIdade = typeof idade

console.log(tipoNome)
console.log(tipoIdade)

/*O resultado aparece como undefined, pois faltou colocar valor na variavel*/

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")


console.log(tipoNome)
console.log(tipoIdade)

//Percebi que o tipo só vem depois de receber um valor na variavel.
console.log("Olá ", nome, ",você tem", idade, "anos.")


//Exercicio 2


const pergunta1 = "1 - Qual sua série favorita?"
const pergunta2 = "2 - Qual seu filme favorito?"
const pergunta3 = "3 - Qual sua comida favorita?"
const pergunta4 = "4 - Uber Eats ou Ifood?"
const pergunta5 = "5 - Biscoito ou Bolacha?"

let serie = prompt(pergunta1)
let filme = prompt(pergunta2)
let comida = prompt(pergunta3)
let aplicativo = prompt(pergunta4)
let opcao = prompt(pergunta5)

console.log(pergunta1, serie)
console.log(pergunta2, filme)
console.log(pergunta3, comida)
console.log(pergunta4, aplicativo)
console.log(pergunta5, opcao)



//Exercicio 3


let arrayComidaFavorita = ["Pastel", "Donuts", "x-salada", "salada de Berinjela", "coxinha"]
console.log("Essas são minhas comidas favoritas")
console.log(arrayComidaFavorita[0])
console.log(arrayComidaFavorita[1])
console.log(arrayComidaFavorita[2])
console.log(arrayComidaFavorita[3])
console.log(arrayComidaFavorita[4])

arrayComidaFavorita[1] = prompt("E a sua comida favorita qual é?")

console.log(arrayComidaFavorita[1])

//Exercicio 4

let arrayPerguntas = ["Você mora em São Paulo?", "Você gosta de lasanha?", "Você gosta de programação?"]
let arrayRespostas = [true, false, true]
console.log(arrayPerguntas[0], arrayRespostas[0])
console.log(arrayPerguntas[1], arrayRespostas[1])
console.log(arrayPerguntas[2], arrayRespostas[2])