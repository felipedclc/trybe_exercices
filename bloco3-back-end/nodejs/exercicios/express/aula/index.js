const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const app = express();

const HTTP_UNAUTHORIZED = 401;

const logRequestMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);

  next();
};

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return next();
  }

  res.status(HTTP_UNAUTHORIZED);
  res.json({ message: 'Token inválido' });
};

app.use(bodyParser.json());
app.use(logRequestMiddleware);
app.use(authMiddleware);

app.get('/', (req, res) => res.json('Hello, world!'));

app.get('/hello', (req, res) => {
  res.send({ message: 'Hello again, world!' });
});

app.post('/echo', (req, res) => {
  res.status(200).json(req.body);
});

app.get(
  '/error',
  rescue(async (req, res) => {
    throw new Error('erro genérico');
  })
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ errorMessage: err.message });
});

app.listen(3000, () => {
  console.log('App ouvindo na porta 3000!');
});