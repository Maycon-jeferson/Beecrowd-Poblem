const value = '0 1'

const [x, y] = value.split(' ')

if (x > 0 && y > 0){
    console.log('Q1')
} else if(x < 0 && y > 0){
    console.log('Q2')
} else if(x < 0 && y < 0){
    console.log('Q3')
} else if(x > 0 && y < 0){
    console.log('Q4')
} else if(x == 0 && y < 0 || y > 0){
    console.log('Eixo y')
} else if(x > 0 || x < 0 && y == 0){
    console.log('Eixo x')
}else if(x == 0 && y == 0){
    console.log('Origem')
}