/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
let cartaUser
let arrayUser
let arrayComputador
let cartaComputador

function distribuiCartas() {
    cartaUser = comprarCarta();
    cartaComputador = comprarCarta();
    arrayUser = [cartaUser]
    arrayComputador = [cartaComputador]
}

function inicioJogada() {
    if (confirm("Quer iniciar uma nova rodada?")) {
        distribuiCartas()
        jogada()
        selecionaGanhador()
    } else {
        console.log("Jogo Encerrado!")
    }
}


function jogada() {
    if (cartaUser.valor !== "A" && cartaComputador.valor !== "A") {
        console.log(`Usuário - cartas:${cartaUser.texto} - pontuação ${cartaUser.valor}`)
        console.log(`Computador - cartas:${cartaComputador.texto} - pontuação ${cartaComputador.valor}`)


    } else if ((cartaUser.valor === "A" && cartaComputador.valor === "A")) {
        confirm("Reinicie a aplicação para jogar novamente, erro na jogada")
    }
}


function selecionaGanhador() {
    if (jogada.cartaUser.valor >= jogada.cartaComputador.valor) {
        console.log("O usuário ganhou!")
    } else if (jogada.cartaUser.valor <= jogada.cartaComputador.valor) {
        console.log("O computador ganhou!")
    } else if (jogada.cartaUser.valor === jogada.cartaComputador.valor) {
        console.log("Empate")
    }
}