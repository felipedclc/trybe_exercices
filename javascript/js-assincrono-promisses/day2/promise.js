const promiseEx = new Promise((resolve, reject) => { 
// Pending - app está rodando
// Resolved(return) - resposta positiva, mas não para igual ao return
// Rejected(return) - resposta negativa, mas não para igual ao return
});

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
  });

  