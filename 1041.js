const value = input.split(' ')
const x = parseFloat(value[0])
const y = parseFloat(value[1])

if (x > 0 && y > 0){
    console.log('Q1')
} else if(x < 0 && y > 0){
    console.log('Q2')
} else if(x < 0 && y < 0){
    console.log('Q3')
} else if(x > 0 && y < 0){
    console.log('Q4')
} else if(x === 0 && y < 0 || y > 0){
    console.log('Eixo Y')
} else if(y === 0 && x < 0 || x > 0) {
    console.log('Eixo X')
}else if(x === 0 && y === 0){
    console.log('Origem')
}