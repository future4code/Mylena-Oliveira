/*
1-No primeiro console.log será executado o número 10, e no segundo console.log aparece 10,5.

2- 10,10,10

3- 

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valorDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDiaria/horasTrabalhadas} por hora`)
*/

//Exercicios de escrita de código

// Exercicio 1

let nome
let idade

console.log(typeof nome, typeof idade)

//Por que não definimos um valor para variavel, e consequente o JS não consegue localizar o tipo.
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

console.log(typeof nome, typeof idade)

console.log("Olá", nome, "você tem ", idade, "anos. Onde ", nome, "e", idade, " são os valores que o usuário inseriu")

//Exercicio 2

const pergunta1 = "Está fazendo frio?"
let resposta1 = prompt(pergunta1)

const pergunta2 = ("Gostando do curso da Labenu?")
let resposta2 = prompt(pergunta2)

const pergunta3 = "E dos professores?"
let resposta3 = prompt(pergunta3)


console.log(pergunta1, resposta1, pergunta2, resposta2, pergunta3, resposta3)



//Exercicio 3

let a = 10
let b = 25
let c
c = a
a = b
b = c


console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


//DESAFIO

let num1 = prompt(Number("Digite um número"))
let num2 = prompt(Number("Digite outro número"))

let resultado1 = Number((num1 + num2))
const resultado2 = Number((num1 * num2))

console.log("Soma", resultado1, "Multiplicação", resultado2)