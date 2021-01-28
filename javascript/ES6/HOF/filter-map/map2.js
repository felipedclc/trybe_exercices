//  Transformando todos os números em negativos e passando para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));
//                         se number > 0  return number * -1 : caso contrario return number

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]


// Unindo dois arrays com o map(cria outro array)
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updatePrices = ((products, prices) => {
    return products.map((product, i) => ({
        [product]: prices[i]
    }));
})

console.log(updatePrices(products, prices));