// BACK-END

function feed(io) {
  io.on('connection', (socket) => {
    let currentLikes = 0;

    socket.on('likePost', () => {
      currentLikes += 1;
      console.log(currentLikes);
      
      io.emit('updateLikes', currentLikes); // envia o currentLikes como parâmetro
    })
  });
}

module.exports = feed;