const express = require('express')

const PORT = 3005

const app = express();


app.get('/', (req, res) => {
    res.send('Inicio')
})

app.get('/saludo', (req, res) => {
  res.send('Hola desde express js')
});

app.listen(PORT, () => {
    console.log(`servidor express escuchando dese el puerto ${PORT}`);
});

