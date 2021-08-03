/*Exercicio de interpretação de código

1-
a)Será mostrado o primeiro elemento do array elenco, que é  "Matheus Nachtergaele",
no segundo console.log, ele puxa o ultimo array, e no terceiro console.log mostrará, o ultimo array
2-
a) No primeiro console, mostrará tudo que esta no objeto cachorro
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
E no segundo console.log mostrará o mesmo item, pois foi utilizado um spread que realiza cópias.
e no terceiro console, mostrará os mesmos itens de cachorro, porém com a letra A trocada pelo O.

3-
a/b)Aparecerá o resultado false, pois ele utiliza pessoa como objeto da função e retorna a propriedade
da string que está sendo utilizada. então ele pegou o backender: false e retornou, pois realizou a busca.
e o segundo console.log, retorna undefined pois não tem a propriedade altura no objeto.


Exercicios de escrita de código

1-
a)
*/
const sobreMim = {
    nome: "Mylena",
    apelidos: [
        "mymy",
        "Lena",
        "Myh"
    ]
}
console.log(`Eu sou ${sobreMim.nome}, mas pode me chamar de: ${sobreMim.apelidos[0]} ${sobreMim.apelidos[1]} ${sobreMim.apelidos[2]}!`)
    //b)
const novosApelidos = {
    ...sobreMim,
    apelidos: [
        "savala",
        "Lele",
        "Myleninha"
    ]
}
console.log(novosApelidos)

//2
//a)
const pessoaUm = {
    nome: "Antonio",
    idade: 23,
    profissao: "Engenheiro de dados"
}
const pessoaDois = {
        nome: "Leticia",
        idade: 18,
        profissao: "Especialista 3"
    }
    //b)

function descricao(primeiraPessoa, segundaPessoa) {
    primeiraPessoa = [primeiraPessoa.nome, primeiraPessoa.nome.length, primeiraPessoa.idade,
        primeiraPessoa.profissao, primeiraPessoa.profissao.length
    ]
    segundaPessoa = [segundaPessoa.nome, segundaPessoa.nome.length, segundaPessoa.idade,
        segundaPessoa.profissao, segundaPessoa.profissao.length
    ]
    console.log(primeiraPessoa, segundaPessoa)
}

descricao(pessoaUm, pessoaDois)

//3-
//a)
const carrinho = []
    //b
const frutaUm = {
    nome: "Laranja",
    disponibilidade: true
}
const frutaDois = {
    nome: "Morango",
    disponibilidade: false
}
const frutaTres = {
        nome: "Abacaxi",
        disponibilidade: true
    }
    //c)

function recebimentoFruta(primeiraFruta, segundaFruta, terceiraFruta) {
    carrinho.push(primeiraFruta, segundaFruta, terceiraFruta)
}
recebimentoFruta(frutaUm, frutaDois, frutaTres)
    //d)
console.log(carrinho)