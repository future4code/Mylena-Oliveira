/*

Exercicio 1
O teste realiza os números multiplos de 2, pois o simbolo % significa 0, e é esperado que os números que sejam multiplos 
de 2, tenha como resto 0. Ele apresenta na tela "Passou no teste", os números que são múltiplos de 2."Não passou no teste",
significa que o número inserido pelo usuário não é um multiplo de 2.

Exercicio 2

a)Para automatizar uma tarefa de consulta do supermercado, categorizando e dando preço por item.
b)O preço da fruta Maçã é R2.25$"
c)O algoritmo continua, pois não tem nada que o pause e acaba mostrando o valor abaixo, que no caso é o 5.


Exercicio 3

a)Solicitando ao usuário que digite um número, e ja definindo o tipo da variavel numero.
b)Se o usuário digitar 10, a mensagem será "Esse número passou no teste". Se for -10, vai dar erro no programa,
pois não foi criado uma condição do que fazer caso o numero for diferente de (numero > 0).
c)Sim, pois não foi criado uma condição, e também a variavel let é uma variavel que está dentro do if, 
não podendo ser utilizada pelo pai.

*/

//Exercicio 4

const idade = Number(prompt("Qual a sua idade?"))

if (idade > 18) {
    console.log("Você pode dirigir")
} else {
    25
    console.log("Você não pode dirigir.")
}

//Exercicio 5

console.log("Insira a sigla que você do turno  que você está cursando")
const periodo = String(prompt("Insira a sigla que você do turno  que você está cursando \nM - Matutino \n V - Vespertino \n N - Noturno"))


if (periodo === "M") {
    console.log("Bom dia!")
} else if (periodo === "V") {
    console.log("Boa tarde!")
} else if (periodo === "N") {

    console.log("Boa noite!")
} else {
    console.log("Você não digitou as opções disponíveis!")

}

//Exercicio 6

console.log("Insira a sigla que você do turno  que você está cursando")
const periodo = String(prompt("Insira a sigla que você do turno  que você está cursando \nM - Matutino \n V - Vespertino \n N - Noturno"))

switch (periodo) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Você não digitou as opções disponíveis!")
}

//Exercicio 7

const genero = String(prompt("Qual genero gostaria de assistir?"))
const valor = Number(prompt("Qual valor do ingresso"))


if (genero === "fantasia" && valor < 15) {
    console.log("Bom filme")
} else {
    console.log("Escolha outro filme")
}


//************DESAFIOS************** 
//DESAFIO 1


const genero = String(prompt("Qual genero gostaria de assistir?"))
const valor = Number(prompt("Qual valor do ingresso"))


if (genero === "fantasia" && valor < 15) {
    let acompanhamentos = String(prompt("Escolha algum snack de sua preferencia\n Chocolate\nPipoca\nDoces"))


    switch (acompanhamentos) {
        case "Chocolate":
            console.log("Bom filme, com ", acompanhamentos)
            break
        case "Pipoca":
            console.log("Bom filme, com ", acompanhamentos)
            break
        case "Doces":
            console.log("Bom filme, com ", acompanhamentos)
            break
        default:
            console.log("Você não digitou as opções disponíveis!Bom dia")
    }

} else {
    console.log("Escolha outro filme")
}


//DESAFIO 2

const nome = String(prompt("Qual seu nome?"))
const tipo = String(prompt("Insira a sigla do tipo de jogo que deseja\nIN - Internacional\nDO - Doméstico"))
const etapa = String(prompt("Insira a sigla da etapa do jogo que deseja\nSF - Semi-Final\nDT - Decisão do Terceiro do Lugar\nFI - Final"))
const categoria = Number(prompt("Selecione uma categoria(1, 2, 3 ou 4"))
const quantidade = Number(prompt("Insira a quantidade de ingressos que deseja"))

var valor = 0
var ingresso = 0
if (tipo === "IN") {
    var cotacao = 4.10

    if (etapa === "SF") {

        switch (categoria) {
            case 1:
                ingresso = 1320
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 2:
                ingresso = 880
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 3:
                ingresso = 550
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 4:
                ingresso = 220
                valor = ((ingresso * quantidade) * cotacao)
                break
            default:
                console.log("Etapa selecionada inválida")
        }
    } else if (etapa === "DT") {

        switch (categoria) {
            case 1:
                ingresso = 660
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 2:
                ingresso = 440
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 3:
                ingresso = 330
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 4:
                ingresso = 170
                valor = ((ingresso * quantidade) * cotacao)

                break
            default:
                console.log("Etapa selecionada inválida")
        }

    } else {

        switch (categoria) {
            case 1:
                ingresso = 1980
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 2:
                ingresso = 1320
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 3:
                ingresso = 880
                valor = ((ingresso * quantidade) * cotacao)
                break
            case 4:
                ingresso = 330
                valor = ((ingresso * quantidade) * cotacao)
                break
            default:
                console.log("Etapa selecionada inválida")
        }

    }
    console.log("---Dados da compra---")
    console.log("Nome do cliente: ", nome)
    console.log("Tipo do Jogo: ", tipo)
    console.log("Etapa do jogo: ", etapa)
    console.log("Categoria: ", categoria)
    console.log("Quantidade de Ingressos: ", quantidade, " ingresso(s)")
    console.log("-- - Valores-- -")
    console.log(" Valor do ingresso:", ingresso)
    console.log(" Valor Total:", valor)
} else if (tipo === "DO") {

    if (etapa === "SF") {

        switch (categoria) {
            case 1:
                ingresso = 1320
                valor = (ingresso * quantidade)
                break
            case 2:
                ingresso = 880
                valor = (ingresso * quantidade)
                break
            case 3:
                ingresso = 550
                valor = (ingresso * quantidade)
                break
            case 4:
                ingresso = 220
                valor = (ingresso * quantidade)
                break
            default:
                console.log("Etapa selecionada inválida")
        }
    } else if (etapa === "DT") {

        switch (categoria) {
            case 1:
                ingresso = 660
                valor = (ingresso * quantidade)
                break
            case 2:
                ingresso = 440
                valor = (ingresso * quantidade)
                break
            case 3:
                ingresso = 330
                valor = (ingresso * quantidade)
                break
            case 4:
                ingresso = 170
                valor = (ingresso * quantidade)

                break
            default:
                console.log("Etapa selecionada inválida")
        }

    } else {

        switch (categoria) {
            case 1:
                ingresso = 1980
                valor = (ingresso * quantidade)
                break
            case 2:
                ingresso = 1320
                valor = (ingresso * quantidade)
                break
            case 3:
                ingresso = 880
                valor = (ingresso * quantidade)
                break
            case 4:
                ingresso = 330
                valor = (ingresso * quantidade)
                break
            default:
                console.log("Etapa selecionada inválida")
        }

    }
    console.log("---Dados da compra---")
    console.log("Nome do cliente: ", nome)
    console.log("Tipo do Jogo: ", tipo)
    console.log("Etapa do jogo: ", etapa)
    console.log("Categoria: ", categoria)
    console.log("Quantidade de Ingressos: ", quantidade, " ingresso(s)")
    console.log("-- - Valores-- -")

    console.log(" Valor do ingresso:", ingresso)
    console.log(" Valor Total:", valor)

}