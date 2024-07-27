var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())

var pesoA = 3.5
var pesoB = 7.5

var media = (((a*pesoA) + (b*pesoB)) / (pesoA + pesoB))
console.log(`MEDIA = ${media.toFixed(5)}`) 