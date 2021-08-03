/*
Exercicios de interpretação de código
1-
a)O código recebe um número digitado pelo usuário e verifica se o resto da divisão por 2 é 0
b)Verifica se o numero digitado é par.
c)Para número impares, pois o resto da divisão nunca será 0.

2-
a) Para consultar o valor das frutas cadastradas no mercado, e mostrar ao usuário o valor
correspondente a fruta cadastrada.
b)"O preço da fruta maçã é, R$2.25.
c) O valor de pera que deveria ser de 5.5, será de 5, pois o break é necessário para limitar a sintaxe.

3-
a)solicitando que o usuário digite um número, e já converte de string para o tipo Number.
b)"Esse número passou no teste", se fosse -10, não iria aparecer nada, pois a variavel mensagem,
não é global.
c) O erro seria de que a váriavel mensagem não foi declarada.
*/
//Exercicios de escrita de código
//1)
console.log("--------->Algoritmo que verifica se já pode dirigir<----------")
const idade = Number(prompt("Digite a sua idade: "))
if (idade > 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

//2-
const turno = prompt("Digite o turno que você estuda: \nDigite: \n M(Matutino)\nV(Vespertino) \nN(Noturno)")

if (turno.toUpperCase() === "M") {
    console.log("Bom dia!")
} else if (turno.toUpperCase() === "V") {
    console.log("Boa tarde!")
} else if (turno.toUpperCase() === "N") {
    console.log("Boa noite!")
} else {
    console.log("Você não digitou corretamente as opções! Reinicie a aplicação para tentar novamente.")
}


const turnoAluno = prompt("Digite o turno que você estuda: \nDigite: \n M(Matutino)\nV(Vespertino) \nN(Noturno)")

switch (turnoAluno.toUpperCase()) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Você não digitou corretamente as opções! Reinicie a aplicação para tentar novamente.")
        break;
}

//4 - com desafio
const precoFilme = Number(prompt("Digite o valor do ingresso:"))
const generoFilme = prompt("Qual o gênero do filme?")

if (precoFilme <= 15 && generoFilme.toLowerCase() === "fantasia") {
    const lanche = prompt("Qual lanche? \n(pipoca, chocolate, doces)")
    console.log("Bom filme!\nAproveite o seu ", lanche)
} else {
    console.log("Escolha outro filme :(")
}


//DESAFIOS
//2-
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