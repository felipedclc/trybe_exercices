////// OBJETO LITERAL

/* const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2009, 2011, 2015],
};

console.log(`The player name is ${player.name} ${player.lastName} and she have a ${player.age} years.`);
console.log(`${player.name} was the best of the world 6 times: ${player.bestInTheWorld}.`);
console.log('--------------');

// FOR IN
let pizzas = {
    sabor: 'Margherita',
    preco: '39.90',
    bordaCatupiry: true
};

let pizzasDoces = ['Morango', 'Chocolate', 'Banana'];
pizzasDoces.preco = '30.00, 25.00, 27.80'; // criando valores para um array
console.log(pizzasDoces.preco);
for (let key in pizzasDoces) {
    console.log(pizzasDoces);
}

for (let key in pizzas) {
    console.log(key); // chaves do objeto (chave: valor)
    console.log(pizzas); // objeto completo
    console.log(key, pizzas[key]); // valores do objeto
}
console.log('--------------')

// FUNCOES
function area(base, altura) {
    return base * altura;
}

function perimetro(base, altura) {
    return base * 2 + altura * 2;
}

let base = 30.05;
let altura = 21.04;

console.log(`A área é igual a ${area(base, altura).toFixed(2)} e o perímetro é ${perimetro(base, altura).toFixed(2)}. `); 
*/

const info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinos do Pato Donald',
}

console.log(`Bem vinda ${info.personagem}`);
info.recorrente = 'sim';
console.log(info);

for (let key in info) {
    console.log(key);
}
console.log('-------------')
for (let key in info) {
    console.log(info[key]);
}

const info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}
console.log('--------------')

for (let properties in info) {
    if (info[properties] == info.recorrente && info.recorrente == 'sim' && info2.recorrente == 'sim') {
        console.log('ambos');
    }
    else {
        console.log(info[properties] + ' e ' + info2[properties])
    }
}

/* const infoJuncao = Object.assign(info, info2);
console.log(infoJuncao);
 */