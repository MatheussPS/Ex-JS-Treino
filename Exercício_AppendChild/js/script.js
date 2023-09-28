function listar(){
    let name = document.getElementById("nome_prod").value
    let marca_prod = document.getElementById("marca_prod").value
    let price = Number(document.getElementById("valor_prod").value)

    const InfProd = {
        nome: name,
        marca:marca_prod,
        preco: price 
    }

    const list_prod = document.createElement("div")
    const criarNome = document.createElement("ul")
    const criarMarca = document.createElement("ul")
    const criarPreco = document.createElement("ul")
    const listas = document.getElementById("lista_prod")

    criarNome.innerHTML = InfProd.nome
    criarMarca.innerHTML = InfProd.marca
    criarPreco.innerHTML = InfProd.preco

    list_prod.appendChild(criarNome)
    list_prod.appendChild(criarMarca)
    list_prod.appendChild(criarPreco)

    listas.appendChild(list_prod)
}