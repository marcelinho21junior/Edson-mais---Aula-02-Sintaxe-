let frase = 'Olá marcelo'

document.write(frase)
console.log(frase)

// criar variavies
let mensagem = "mensagem"
let mensagem2 = "mensagem2"
let peso = 83
let altura = 1.75
let cidade = 'Lorena'

document.write("<p>"+mensagem+"</p>")
document.write(`Mensagem 2${mensagem2} </br>`)
document.write(`Peso ${peso} </br>`)
document.write(`altura ${altura} </br>`)
document.write(`cidade ${cidade}</br>`)

// arrays
let produtos = ['arroz','feijao','carne']

console.log(produtos)

// objetos
let pessoa = {
    nome:'marcelo',
    idade:28,
    cidade:'lorena'
}
document.write('OBJETOS</br>')
document.write(`objeto ${[pessoa]}`)
document.write(`cidade ${[pessoa.nome]}`)

console.log(pessoa)