/*Exercicio de escrita de código

1)
a-false
b-false
c-true
d-boolean

2)O valor nas variaveis é uma string, ele irá concatenar e não somar.


3)deve ser utilizado um Number(), para converter para number.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//Exercicio 1
//a)
const idade = Number(prompt("Digite a sua idade:"))
    //b)
const idadeTerceiros = Number(prompt("Digite a idade de seu amigo/a:"))
    //c)
const idadeMaior = idade >= idadeTerceiros
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
    //d)
const diferencaIdade = idade - idadeTerceiros
console.log("A diferença de idade entre você e seu amigo é de:", diferencaIdade)

//Exercicio 2
//a)
const numPar = Number(prompt("Digite um número que seja par:"))
    //b-
const restoDivisao = numPar % 2
console.log("O resto da divisão desse número por 2 é:", restoDivisao)
    //c)Sim, o resultado sempre dá 0, pois o numero que solicito é par.
    //d)-Retorna 01


//Exercicio 3
const idadeUser = Number(prompt("Digite sua idade"))
    //a)
const idadeMeses = idadeUser * 12
console.log("A idade em meses é", idadeMeses)
    //b)
const idadeDias = idadeUser * 365
console.log("A idade em dias é", idadeDias)
    //c)
const idadeHoras = idadeUser * 8760
console.log("A idade em horas é", idadeHoras)


//Exercicio 4

const num1 = Number(prompt("Digite um número:"))
const num2 = Number(prompt("Digite um segundo número:"))

const numeroMaior = num1 >= num2
console.log("O primeiro numero é maior que segundo?", numeroMaior)

const numeroIgual = num1 === num2
console.log("O primeiro numero é igual ao segundo?", numeroIgual)

const divisivelPrimeiro = num1 % num2 > 0
console.log("O primeiro numero é divisível pelo segundo?", divisivelPrimeiro)

const divisivelSegundo = num2 % num1 > 0
console.log("O segundo numero é divisível pelo primeiro?", divisivelSegundo)



//DESAFIOS
//1)
console.log("Algoritmo que converte - Graus Fahrenheit(°F) para Kelvin(K) e (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32")

//- Graus Fahrenheit(°F) para Kelvin(K)
//a)
let grausFahrenheit = 77
let kelvin = (grausFahrenheit - 32) * (5 / 9) + 273.15
console.log("O valor de kelvin é", kelvin)
    //- Graus Celsius(°C) para Graus Fahrenheit (°C)

//b)

let grausCelsius = 80
let fahrenheit = ((grausCelsius) * (9 / 5)) + 32
console.log("O valor do Fahrenheit", fahrenheit)

//c)

grausCelsius = 30
fahrenheit = ((grausCelsius) * (9 / 5)) + 32
console.log("O valor para fahrenheit é:", fahrenheit)

kelvin = (fahrenheit - 32) * (5 / 9) + 273.15
console.log("O valor de Kelvin é: ", kelvin)

//d)

grausCelsius = Number(prompt("Digite o valor em Celsius para converter em F e depois para K"))
fahrenheit = ((grausCelsius) * (9 / 5)) + 32
console.log("O valor para fahrenheit é:", fahrenheit)

kelvin = (fahrenheit - 32) * (5 / 9) + 273.15
console.log("O valor de Kelvin é: ", kelvin)



//DESAFIO 2
//a)
let quilowattHora = 280
let valorPago = quilowattHora * 0.05
console.log("Valor a ser pago", valorPago)
    //b)
valorDesconto = valorPago - (valorPago * 0.15)
console.log("Valor a ser pago com desconto", valorDesconto)