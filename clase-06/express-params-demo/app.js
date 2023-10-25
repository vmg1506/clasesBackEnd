const express = require('express')
const app = express()
const port = 8080


const users = [
    {id: 1, firstNmae: 'Victor', lastNmae: 'grajales', age: 32, gender: 'M'},
    {id: 2, firstNmae: 'Valentina', lastNmae: 'Grand', age: 30, gender: 'F'},
    {id: 3, firstNmae: 'Ana', lastNmae: 'Grajales', age: 2, gender: 'F'},
    {id: 4, firstNmae: 'Maria', lastNmae: 'Roman', age: 65, gender: 'F'},
    {id: 5, firstNmae: 'Daniela', lastNmae: 'Guevara', age: 30, gender: 'F'},

];

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find((u) => u.id === parseInt(userId))
  if(!user) {
    res.send('usuario no encontrado')
  }else[
    res.send(user)
  ]
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});


