// let n1 = Number(prompt("Digite o primeiro numero"))
// let n2 = Number(prompt("Digite o segundo numero"))

// function somar(n1, n2){
//     console.log(n1+n2)
// }

function olaMundo(){
    alert("Olá Mundo")
}

function mostraNome(){
    let nameuser = prompt("Digite seu nome!")
    console.log(nameuser)
}

function concatenaPalavras(){
    let fstword = prompt("Digite o primeiro numero")
    let secword = prompt("Digite o segundo numero")
    let concatenacao = fstword + secword
    console.log(concatenacao)
}

function somaNumeros(){
    let n1 = Number(prompt("Digite a primeira palavra"))
    let n2 = Number(prompt("Digite a segunda palavra"))
    let soma = n1 + n2
    console.log(soma)
}

function criarObjetos(){
    let name = String(prompt("Digite seu nome"))
    let old = String(prompt("Digite sua idade"))
    let team = String(prompt("Digite seu time"))

    const object = {
        nome: name,
        idade:old,
        time_do_coração:team
    }

    console.log(object)
}

function calcular(){
    let n1 = Number(prompt("Digite o primeiro numero"))
    let n2 = Number(prompt("Digite o primeiro numero"))
    let op = prompt("Digite a operação")

    switch(op){
        case "somar":
            console.log(n1+n2)
            break;
          
        case "subtrair":
            console.log(n1-n2)
            break;
           
        case "mutiplicar":
            console.log(n1*n2)
            break;
            
        case "dividir":
            if(n2 == 0 ){
                console.log("Não existe divisao por 0")
            }
            else{
                console.log(n1/n2)
            }
            
            break;   
    }
    
}

function mudarConstante(){
    const name = prompt("Digite seu nome")
    console.log(name)
}

function manipulaArrays(){
    let n = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]
    // n.splice(1,1)
    // n.sort()
    console.log(n)
    // n.unshift() adiciona um elemento ao vetor
    // n.shift() retira o primeiro elemento do vetor
    // .sort() organiza array em ordem alfabetica
    // splice(posicao, qtd que tira) remove ou adiciona algo do vetor

    let n2 = [1,5,2,78,3,4,6,23]
    n2.sort((a,b) => a-b)

    console.log(n2)
}