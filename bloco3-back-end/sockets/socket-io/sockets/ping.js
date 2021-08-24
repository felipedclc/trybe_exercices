module.exports = (io) => {
  // socket.on() cria um listener
  io.on('connection', (socket) => { // socket - representa conexão aberta com o socket-io
    // console.log(`Usuário conectado. ID: ${socket.id} `);

    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

    socket.on('ping', () => { // evento personalizado('ping')
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // envia um aviso para o cliente que o ping chegou.
    });
  });
};