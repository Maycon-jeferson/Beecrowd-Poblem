var id = parseInt(lines[0])
var horas = parseInt(lines[1])
var saldo = parseFloat(lines[2])

var salario = (horas*saldo)
console.log(`NUMBER = ${id}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)