module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    // console.log('Alguem entrou na sala');
    socket.join(room); // sinaliza que um usuário se conectou a uma sala específica

    socket.emit('serverMessage', `Bem vindo ${username} a sala sobre ${room}`);

    // .broadcast.to - envia um evento para uma sala específica
    socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);

    socket.on('roomClientMessage', ({ message, room}) => {
      io.to(room).emit('serverMessage', `${username}: ${message}`)
    });
  });
});