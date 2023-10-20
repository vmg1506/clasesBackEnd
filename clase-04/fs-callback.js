const fs = require('fs')

function readFile() {
    const pathFile = './text-input-file.txt';

    fs.readFile(pathFile, 'utf-8', (error, content) => {
        if(error){
            console.log('ocurrio un error durante la lectura: ', error.message)
        }else {
            console.log('aca el contenido:\n', content)
        }
    });
}

function writeFile() {
    const pathFile = './text-output-file.txt';
    const content = 'Este es el contenido escrito con writeFile\n';
    fs.writeFile(pathFile, content, 'utf-8', (error) => {
        if(error){
            console.log('ocurrio un error al escribir en el archivo', error.message)
        }else{
            console.log('Escritura exitosa!')
        }
    })
}


function appendFile() {
    const pathFile = './text-output-file.txt';
    const content = 'ESTE CONTENIDO FUE AGREGADO CON APPENDFILE';
    fs.appendFile(pathFile, content, 'utf-8', (error) => {
        if(error){
            console.log('No se pudio escribir en el archivo')
        }else{
            console.log('se escribio en el archivo con exito!')
        }
    })
}


function unlinkFile() {
    console.log('[sync] Borrado de archivos')
    console.log('Intentando borrar el archivo...')
    const pathFile = './text-output-file.txt'
    fs.unlink(pathFile, (error) => {
        if(error) {
            console.log('no se pudo eliminar el archivo', error.message)
        }else {
            console.log('se elimino el archivo con exito')
        }
    })
}

unlinkFile()