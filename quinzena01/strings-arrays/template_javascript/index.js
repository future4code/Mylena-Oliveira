/*Exercicio 1
a)undefined, pois so criou a variavel e nao atribuiu nada.

b)null, pois o tipo da variavel declarada foi null

c) 11, quantidade de elementos dentro do array.

d)3, que é a posição zero do array.

e) mostra todos os elementos e suas posições correspondentes do array, e 
incrementa uma posição após o primeiro elemento, incluindo o 19

f)pega o setimo elemento do array e armazena na variavel valor.


Exercicio 2

O console.log nos mostrará:
SUBI NUM ONIBUS EM MIRROCOS, 27


//Exercicio de escrita de código 
//Exercicio 1
const nomeUser = prompt("Digite seu nome: ")
const emailUser = prompt("Digite seu e-mail:")

console.log(`O ${emailUser} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUser}`)


//Exercicio 2
//a)
let comidasFavoritas = ["salada de beringela", "pamonha doce", "Macarrão a bolonhesa", "lasanha", "pudim"]
    //b)
console.log("Estas são minhas comidas favoritas:", "\n",
        comidasFavoritas[0], "\n",
        comidasFavoritas[1], "\n",
        comidasFavoritas[2], "\n",
        comidasFavoritas[3], "\n",
        comidasFavoritas[4])
    //c)

let i = 0
const comidaUser = prompt("Digite uma comida: ")
comidasFavoritas[i + 1] = comidaUser
console.log(comidasFavoritas)
*/
//Exercicio 3

//a)
const array = []
const listaTarefa = array

//b)
array.push(prompt("Digite uma tarefa"))
array.push(prompt("Digite a segunda tarefa"))
array.push(prompt("Digite a terceira tarefa"))

//c)
console.log(listaTarefa)
let indice = prompt("Indique o indice de tarefa")
    //d)
console.log('Lista', listaTarefa[indice])
    //e)
listaTarefa.splice(indice, 1)
    //f)
console.log(listaTarefa)