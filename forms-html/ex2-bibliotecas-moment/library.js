let moment = require('moment');

let brasiltetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasiltetra.fromNow();

console.log(`Ouvimos o "É TETRAAA!!" há ${fromNow}`);