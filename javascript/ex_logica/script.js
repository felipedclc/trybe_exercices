/* // let n = Math.round(Math.random() * (50 - 1) + 1).toFixed(0);

// quadrado de asteriscos
let n = 5;
let column = '';

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) { // criando a linha com 5 *
        column = column + '*';
    }
    console.log(column);
    column = '';
    
}

for (let i = 1; i <= n; i++) {
    column = column + '*'; // criando a linha com 1 *
    console.log(column);
}
 */

/* let n = 5;
let column = '';
for (let i = 1; i <= n; i++) {
    column = '';  // limpando a coluna 
    for (let j = 1; j <= n; j++) { 
        column = column + '*'; // criando n * no for
    }
    console.log(column);
} */

let n = 5;
let column = '';
let position = n;
for (let i = 1; i <= n; i += 1) {
    column = ''; // zerando o column
    for (let c = 1; c <= n; c++) {
        if (c < position) {
            column = column + ' ';
        }
         else {
            column = column + '*';
        }
    }
    console.log(column);
    position = position - 1; // diminuindo o position a cada saida do for(c)
}