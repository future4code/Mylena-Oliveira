// Exemplos
/*
// Exercício 0A
function soma() {
    // escreva seu código aqui
    const num1 = prompt('Digite o primeiro número')
    const num2 = prompt('Digite o segundo número')

    console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
    // escreva seu código aqui
    const mensagem = prompt('Digite sua mensagem')

    console.log(mensagem)
}
*/
// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
    console.log("Algoritmo que calcula a área do retângulo!")
    let altura = prompt('Digite a altura:')
    let largura = prompt('Digite a largura:')

    console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
    console.log("Algoritmo que calcula a idade!")
    let anoAtual = prompt('Digite o ano atual:')
    let anoNascimento = prompt('Digite o ano de seu nascimento:')

    console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
    console.log("Algoritmo que calcula IMC!")
    let peso = prompt('Digite o peso em kg:')
    let altura = prompt('Digite a altura em metros:')

    console.log(Number(peso) / (Number(altura) * (Number(altura))))
}

// Exercício 4
function imprimeInformacoesUsuario() {

    let nome = prompt('Informe seu nome:')
    let idade = prompt('Digite sua idade:')
    let email = prompt('Digite seu e-mail:')

    console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
    let coresFavoritas = []
    const primeiraCor = prompt('Digite a primeira cor favorita:')
    coresFavoritas.push(primeiraCor)

    const segundaCor = prompt('Digite a segunda cor favorita:')
    coresFavoritas.push(segundaCor)

    const terceiraCor = prompt('Digite a terceira cor favorita:')
    coresFavoritas.push(terceiraCor)

    console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
    const palavra = prompt("Digite alguma palavra em minuscula")
    console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
    let custoEspetaculo = prompt("Digite o custo do espetaculo de teatro:")
    let valorIngresso = prompt("Digite o valor do ingresso:")
    console.log(Number(custoEspetaculo) / Number(valorIngresso))

}

// Exercício 8
function checaStringsMesmoTamanho() {
    const primeiraPalavra = prompt("Digite uma palavra:")
    const segundaPalavra = prompt("Digite outra palavra:")
    let maiorQuantidade = primeiraPalavra.length === segundaPalavra.length
    console.log(maiorQuantidade)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
    const primeiraString = prompt("Digite uma palavra:")
    const segundaString = prompt("Digite outra palavra:")

    let igualdade = primeiraString.toUpperCase() == segundaString.toUpperCase()
    console.log(igualdade)

}

// Exercício 10
function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Digite o ano atual"))
    const anoNascim = Number(prompt("Digite o ano de nascimento:"))
    const anoEmissao = Number(prompt("Em que ano sua carteira de identidade foi emitida:"))

    const idadeIdentidade = anoAtual - anoEmissao
    const idadePessoa = anoAtual - anoNascim


    if (idadePessoa <= 20 && idadeIdentidade / 5 >= 1) {
        console.log(Boolean(true))
    } else if (idadePessoa <= 50 && idadePessoa > 20 && idadeIdentidade / 10 >= 1) {
        console.log(Boolean(true))
    } else if (idadePessoa > 50 && idadeIdentidade / 15 > 1) {
        console.log(Boolean(true))
    } else {
        console.log(Boolean(false))
    }

}

// Exercício 11
function checaAnoBissexto() {
    const ano = Number(prompt("Digite um ano: "))
    const categoria1 = (ano % 400) === 0
    const categoria2 = (ano % 4) === 0 && (ano % 100) !== 0

    console.log(categoria1 || categoria2)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
    const idadeAluno = prompt("Você tem mais de 18 anos?") === "sim"
    const escolaridade = prompt("Você possui ensino médio completo?") === "sim"
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso??") === "sim"


    console.log(idadeAluno && escolaridade && disponibilidade)



}