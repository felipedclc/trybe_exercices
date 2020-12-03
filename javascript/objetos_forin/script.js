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
console.log('----------------------')

for (let key in info) {
    console.log(info[key]);
}

const info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}
console.log('----------------------')

for (let properties in info) {
    if (info[properties] == info.recorrente && info.recorrente == 'sim' && info2.recorrente == 'sim') {
        console.log('ambos');
    } else {
        console.log(info[properties] + ' e ' + info2[properties])
    }
}

/* const infoJuncao = Object.assign(info, info2);
console.log(infoJuncao);
 */

console.log('***************************')
// FUNCOES
function isAPalindromo(word) {
    arrayLetters = word.split('');
    if (arrayLetters.reverse('').join('') === word) {
        return 'Its a palindrono';
    } else {
        return 'Not is a palindrono';
    }

}
console.log(isAPalindromo('arara'));
console.log(isAPalindromo('desenvolvimento'));

let palavra = 'olá, eu sou o Goku';
let arrayPalavra = palavra.split('');
console.log(arrayPalavra);
console.log(arrayPalavra.join(''));

console.log('----------------------')

function smallerIndex(array) {
    let menor = Math.min(...array);
    for (let i in array) {
        if (menor === array[i]) {
            return i;
        }
    }
}

let array = [5, 2, 3, 8, 4, 65, 78, 8, 36]
console.log(smallerIndex(array));

console.log('----------------------')

function biggerIndex(array) {
    let maior = Math.max(...array);
    for (let i in array) {
        if (maior === array[i]) {
            return i;
        }
    }
}
console.log(biggerIndex(array));

console.log('----------------------')

function biggestName(lista) {
    let comprimento = 0;
    let biggestWord = '';
    for (let i in lista) {
        if (lista[i].length > comprimento) {
            comprimento = lista[i].length;
            biggestWord = lista[i];
        }
    }
    return biggestWord;
}

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(biggestName(arrayTeste));

console.log('----------------------')

function contaNumRepetido(array) {
    let contador = 0;
    let repetido = 0;
    for (let i in array) {
             
    }
    
}

let numeros = [2, 3, 2, 5, 8, 2, 3];
console.log(contaNumRepetido(numeros)) 