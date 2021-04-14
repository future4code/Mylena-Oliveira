/*
**Exercícios de interpretação de código** 

Exercicio 1
a)No console irá aparecer:
10
50
b)Aparecia um erro, pois o return não aparece nada na tela.

Exercicio 2
a)As saidas foram somente Darvas e Caio, pois no for está limitado até quantidade 2.
b)Mesmo esquema, iria apresentar somente os dois primeiros, então iria apresentar somente Amanda e Caio.

Exercicio 3
O algoritmo pega os números pares e realiza a potencialização
Melhorias
Alterar o nome metodo para potencializacao

*/


//Exercicio 4
//A)

function informacaoSobremim(nome, idade, cidade, estudante) {
    console.log('Eu sou ' + nome + ', tenho ' + idade + ' anos moro em ' + cidade + ' e', estudante)

}
informacaoSobremim('Mylena', 22, 'Hortolândia', 'sou estudante')

//B)
const nome = prompt("Qual seu nome?")
const idade = Number(prompt("Qual sua idade?"))
const cidade = String(prompt("Qual sua cidade?"))
const estudante = Boolean(prompt("Você é estudante?"))

function informacaoSobremim(nome, idade, cidade, estudante) {
    if (estudante === true) {
        estudante = 'Sou estudante'
    } else {
        estudante = 'Não sou estudante'
    }
    const descricao = 'Eu sou ' + nome + ', tenho ' + idade + ' anos moro em ' + cidade + ' e',
        estudante
    return descricao

}
informacaoSobremim()

//Exercicio 5

//A)
const num1 = Number(prompt('Digite um número:'))
const num2 = Number(prompt('Digite um número:'))

function soma(num1, num2) {

    return num1 + num2
}

const valorSomado = soma(num1, num2)
console.log(valorSomado)
    //B)

const num1 = Number(prompt('Digite um número:'))
const num2 = Number(prompt('Digite outro número:'))
condicao = false

function NumeroMaiorouIgual(num1, num2) {
    if (num1 === num2 || num1 > num2) {
        condicao = true
        console.log('A condicao é verdadeira ', condicao)

    } else {
        console.log('A condicao não é verdadeira ', condicao)
    }
    return condicao
}

NumeroMaiorouIgual()

//C)

function repeticaoMensagem(nome) {
    nome = prompt("Digite uma string:");
    for (let i = 0; i < 10; i++) {
        var a = [nome];
        a.push(nome)
        console.log('A String é: ', a[i])

    }
}

repeticaoMensagem()

//Exercicio 6

//A)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function imprimeQuantidade(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array.length)
    }

    return array.length
}
const tamanho = imprimeQuantidade(array)
console.log(tamanho)

//B)

const num1 = 2

function verificaPares(num1) {
    let condicaoNum1
    if (num1 % 2 == 0) {
        condicaoNum1 = true;
    } else {
        condicaoNum1 = false;

    }
    console.log(condicaoNum1)
    return condicaoNum1
}
verificaPares()