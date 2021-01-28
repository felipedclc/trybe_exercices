// ASYNC
// Transforma qualquer função em uma promise
// Agora é só transformar o que é resolve em return e o que é reject em throw


// AWAIT
// O await só pode ser usado dentro de uma função com async
// Faz com o que a função ESPERE uma resposta para continuar sua execução

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");


/**************************************** */
/* const funcao = async() => {
  try {
    const outraFuncao(parametro) = await funcao2(parametro2);
  } 
  catch (error) {
    throw new console.error('errado');
  }

} */