console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {

    let cartaUser = comprarCarta();
    let cartaComputador = comprarCarta();
    console.log(`Usuário - cartas:${cartaUser.texto} - pontuação ${cartaUser.valor}`)
    console.log(`Computador - cartas:${cartaComputador.texto} - pontuação ${cartaComputador.valor}`)
    if (cartaUser.valor >= cartaComputador.valor) {
        console.log("O usuário ganhou!")
    } else if (cartaUser.valor <= cartaComputador.valor) {
        console.log("O computador ganhou!")
    } else if (cartaUser.valor === cartaComputador.valor) {
        console.log("Empate")
    }


} else {
    console.log("O jogo acabou")
}