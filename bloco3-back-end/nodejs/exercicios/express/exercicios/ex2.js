const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const user = {
    name: 'Gringer',
    age: '30',
}

app.get('/hello', (req, res, next) => {
    return res.status(200).json(user);
});

app.post('/hello', (req, res, next) => {
    const { name, age } = req.body;
    res.status(200).json({ 'message': `Hello ${name}` })
});

app.listen(3001, () => console.log('Ouvindo na porta 3001 meu fi!'));

// npm i -D nodemon 