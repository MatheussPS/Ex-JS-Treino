// let n1 = Number(prompt("Digite o primeiro numero"))
// let n2 = Number(prompt("Digite o segundo numero"))

// function subtraiNumeros(n1, n2){
//     console.log(n1-n2)
// }

function olaMundo(){
    alert("Olá Mundo")
}

function mostraNome(){
    let nameuser = prompt("Digite seu nome!")
    console.log(nameuser)
}

function concatenaPalavras(){
    let fstword = prompt("Digite a primeira palavra")
    let secword = prompt("Digite a segunda palavra")
    let concatenacao = fstword + secword
    console.log(concatenacao)
}

function somaNumeros(){
    let n1 = Number(prompt("Digite o primeiro numero"))
    let n2 = Number(prompt("Digite o segundo numero"))
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
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]
    cores.push("Laranja")
    console.log(cores)
    cores.pop()
    console.log(cores)
    cores.sort()
    console.log(cores)
    cores.splice(1,1)
    console.log(cores)
    let Primeiroarray = cores[0];
    let Segundoarray = cores[cores.length-1];
    console.log(`Primeiro elemento do array: ${Primeiroarray}, último numero do array: ${Segundoarray}`);
    cores.unshift("fucsia")
    console.log(cores)
    cores.shift()
    console.log(cores)
    // cores.splice(1,1)
    // cores.sort()
    // cores.unshift() adiciona um elemento ao vetor
    // cores.shift() retira o primeiro elemento do vetor
    // cores.sort() organiza array em ordem alfabetica
    // cores.splice(posicao, qtd que tira) remove ou adiciona algo do vetor
    
    

}