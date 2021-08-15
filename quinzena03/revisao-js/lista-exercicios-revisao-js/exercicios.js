//EXERCÍCIO 01

function inverteArray(array) {
    let arrayInverse = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInverse
}

// EXERCÍCIO 02

function retornaNumerosParesElevadosADois(array) {
    let i = 0
    while (i <= array.length - 1)
        if (array[i] % 2 === 0) {
            let arrayParesElevados = []
            let resultado = array[i] * array[i]
            arrayParesElevados.push(resultado)
            i++
        } else {
            i++
        }
    return resultado
}

// EXERCÍCIO 03

function retornaNumerosPares(array) {
    let arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPar.push(array[i])
        }
    }
    return arrayPar
}


// EXERCÍCIO 04

function retornaMaiorNumero(array) {
    let arrayMaior = 0
    let maiorNumeroo = 999
    for (let i = 0; i < array.length; i++) {
        if (array[i] < maiorNumeroo) {
            arrayMaior = array[i]
        }
    }
    return arrayMaior
}

// EXERCÍCIO 05

function retornaQuantidadeElementos(array) {
    return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
    const respostas = [false, false, true, true, true]
    return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    const novoArray = []
    for (let number = 0; novoArray.length < n; number++) {
        if (number % 2 === 0) {
            novoArray.push(number)
        }
    }
    return novoArray
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

    if (a === b && a === c && b === c) {
        return 'Equilátero'
    } else if (a !== b && a !== c && b !== c) {
        return 'Escaleno'
    } else {
        return 'Isósceles'
    }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

    let maiorNumero
    let menorNumero
    let maiorDivisivelPorMenor

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

    const diferenca = maiorNumero - menorNumero

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
    let menor = Infinity
    let maior = -Infinity
    let segundoMenor = Infinity
    let segundoMaior = -Infinity
    let novoArray = []

    for (let i of array) {
        if (i < menor) {
            menor = i
        }
        if (i > maior) {
            maior = i
        }
    }

    for (let i of array) {
        if (i < segundoMenor && i !== menor) {
            segundoMenor = i
        }
        if (i > segundoMaior && i !== maior) {
            segundoMaior = i
        }
    }
    novoArray.push(segundoMaior)
    novoArray.push(segundoMenor)

    return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    return array
}

// EXERCÍCIO 12
function filmeFavorito() {
    const filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }

    return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
    const filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }

    let atoresConcat = ""
    for (let i = 0; i < filme.atores.length; i++) {
        if (i === filme.atores.length - 1) {
            atoresConcat += filme.atores[i]
        } else {
            atoresConcat += filme.atores[i] + ", "
        }
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`
}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }

    return retangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
    return {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
}