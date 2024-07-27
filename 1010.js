var [code1, quantity1, price1] = lines[0].split(' ').map(value => parseFloat(value));
var [code2, quantity2, price2] = lines[1].split(' ').map(value => parseFloat(value));

var totalValue = quantity1 * price1 + quantity2 * price2;
console.log('VALOR A PAGAR: R$ ' + totalValue.toFixed(2));