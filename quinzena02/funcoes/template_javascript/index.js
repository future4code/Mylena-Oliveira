/*Exercicio de interpretação de código 

1-
a)10 e 50
b)10 e 50, pois a function tem um return.

2-
a) a função tem o objetivo  de pegar a string que o usuário digitar e deixar minusculo e
buscar se o que foi digitado tem a palavra cenoura
b) i. true
   ii. true
   iii.false



//Exercicio de escrita de código
//1
//a)
// function informacoesMylena() {
//     console.log("Eu sou Mylena, tenho 23 anos, moro em Hortolândia e sou estudante.")
// }

// informacoesMylena()
//b)
const nome = prompt("Digite seu nome:")
const idade = Number(prompt("Digite sua idade"))
const cidade = prompt("Digite sua cidade")
const profissao = prompt("Digite sua profissão:")

function sobreMim(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
sobreMim(nome, idade, cidade, profissao)

//2-
//a)


const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))


function soma(numero1, numero2) {
    console.log(numero1 + numero2)
}
soma(num1, num2)

//b)

let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite um segundo número: "))

const verificaNumeroMaior = function(n1, n2) {
    const maiorNumero = n1 >= n2
    return maiorNumero
}

const verificacao = verificaNumeroMaior(numero1, numero2)
console.log(verificacao)

//c)

let numero1 = Number(prompt("Digite um número: "))


const verificaNumeroPar = function(n1) {
    const numeroPar = n1 % 2 === 0
    return numeroPar
}

const verificacao = verificaNumeroPar(numero1)
console.log(verificacao)

//d)

const mensagem = prompt("Digite uma mensagem")

function mensagemModificada(frase) {
    console.log(frase.toUpperCase())
    console.log(frase.length)
}

mensagemModificada(mensagem)



//3
let numeroUser = Number(prompt("Digite um número: "))
let numeroUserDois = Number(prompt("Digite um segundo número: "))

function soma(n1, n2) {
    const somaNumero = n1 + n2
    console.log("A soma dos dois números é: ", somaNumero)
}

function subtracao(n1, n2) {
    const subtracaoNumero = n1 - n2
    console.log("A subtração dos dois números é: ", subtracaoNumero)
}

function multiplicacao(n1, n2) {
    const multiplicacaoNumero = n1 * n2
    console.log("A multiplicação dos dois números é: ", multiplicacaoNumero)
}

function divisao(n1, n2) {
    const divisaoNumero = n1 / n2
    console.log("A divisão dos dois números é: ", divisaoNumero)
}



soma(numeroUser, numeroUserDois)
subtracao(numeroUser, numeroUserDois)
multiplicacao(numeroUser, numeroUserDois)
divisao(numeroUser, numeroUserDois)

*/

//DESAFIOS
//1-
//a)

const parametro = "Olá mundo"

const mostrarParametro = (frase) => {
    console.log(frase)
}

const fraseParametro = mostrarParametro(parametro)