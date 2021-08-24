const socket = window.io(); // executa uma conexão socket com alguém
// socket = io('http://localhost:5000')

const button = document.querySelector('#pingButton');
button.addEventListener('click', (e) => {
  socket.emit('ping'); // emitindo um evento para o back-end
  return false;
});

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
}

socket.on('ola', (mensagem) => createMessage(mensagem));

socket.on('pong', (mensagem) => createMessage(mensagem));