const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;

    if (parseInt(age, 10) <= 17) { // colocando uma restrição de idade
        return res.status(401).json({
            message: `Unauthorized`
        });
    }

    res.status(200).json({
        message: `Hello, ${name}!`
    });
});