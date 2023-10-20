const http = require('http')

const server = http.createServer((req, res) =>{
    res.end('Hola mundo desde el servidor nativo HTTP')
});

server.listen(3005, () => {
    console.log('server escuchando en el puerto 3005');
})


module.exports = {}