require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const dogController = require('./controllers/Dogs');

const PORT = process.env.PORT || 3000;

const middlewares = require('./middlewares');

const app = express();

app.set('view engine', 'ejs'); // necessario para usar a engine(ejs)
app.set('views', path.join(__dirname, 'views'));

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(dogController);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});