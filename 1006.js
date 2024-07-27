var a = parseFloat(lines[0])
var b = parseFloat(lines[1])
var c = parseFloat(lines[2])

var pesoA = 2
var pesoB = 3
var pesoC = 5

var media = (((a*pesoA)+ (b*pesoB) + (c*pesoC)) / (pesoA + pesoB + pesoC))

console.log (`MEDIA = ${media.toFixed(1)}`)