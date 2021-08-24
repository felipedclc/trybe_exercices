// FRONT-END

const socket = window.io(); // conecta com o back-end - na porta que o back está

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
  return false;
});

socket.on('updateLikes', (countLikes) => {
  console.log(countLikes);
  document.querySelector('#currentLikes').innerHTML = countLikes;
});

// Atualizando pelo front-end
document.querySelector('#starIcon').addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);
  
  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});