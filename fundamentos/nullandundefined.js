let valor //nao inicializada
console.log(valor)//undefined

valor = null//ausencia de valor
console.log(valor)
//console.log(valor.toString()) //ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete prduto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)






