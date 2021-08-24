module.exports = (io) => io.on('connection', (socket) => {
  // socket.emit - apenas 1 client
  // io.emit - todos os clients
  // socket.broadcast - todos os clientes menos para quem disparou

  // socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
  socket.broadcast.emit('serverMessage', { mensagem: `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`});
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message); // emite um evento 'serverMessage'
  });
});