const express = require('express')

const app = express();

const port = 3000;

app.get('/bienvenida', (req, res) =>{
    const htmlText = '<h1 style="color:blue">Bienvenido a nuestra web</h1>';
    res.send(htmlText)
});

app.get('/usuario', (req, res) => {
    const user = {
        firstNmae: 'victor',
        lastName: 'grajales',
        age: 32,
        cours: ['Node.js', 'JavaScript', 'HTML', 'CSS']
    };
    res.send(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




