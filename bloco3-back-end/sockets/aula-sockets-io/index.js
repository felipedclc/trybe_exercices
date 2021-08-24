require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { PORT = 3000, SOCKET_PORT = 4555 } = process.env;
const NEWS = [];

const socketIoServer = require('http').createServer(); // criando o servidor do socket.io
const io = require('socket.io')(socketIoServer, {
  cors: { // obj de configuração, esses options são necessários a partir da major 3 do socket.io
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], // métodos permitidos
  },
});

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.set('view engine', 'ejs'); // necessario para usar a engine(ejs)
app.set('views', path.join(__dirname, 'views'));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/news', (req, res) => {
  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(402).json({ message: 'Missing news message' });
  } 

  NEWS.push({ title, message });

  io.emit('notification', { title, message });

  return res.status(200).json({ message: 'Notícia add com sucesso!' });
});

app.get('/', (_req, res) => {
  return res.render('board/board', { news: NEWS });
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`Express ouvindo na porta ${PORT}`);
});

app.listen(SOCKET_PORT, () => {
  console.log(`Socket.io ouvindo na porta ${SOCKET_PORT}`);
});