var nome = lines[0]
var base = parseFloat(lines[1])
var vendas = parseFloat(lines[2])

var salario = (base + ((vendas/100)*15) )

console.log(`TOTAL = R$ ${salario.toFixed(2)}`)