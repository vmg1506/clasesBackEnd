const fs = require('fs');

function readFile() {
    const pathFile = './text-input-file.txt';

    const content = fs.readFileSync(pathFile, 'utf-8');

    console.log('content', content);
}


function writeFile() {
    const pathFile = './text-output-file.txt';

    const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \n"
    fs.writeFileSync(pathFile, content, 'utf-8')

}

function appendFile() {
    const pathFile = './text-output-file.txt';

    const content = 'INFORMACION AGREGADA MEDIANTE APPENDEFILE\n'
    fs.appendFileSync(pathFile, content, 'utf-8')

}

function unlinkFile() {
    console.log('[Sync] Borrado de archivos')
    console.log('intentando borrar el archivo...')
    const pathFile = './text-output-file.txt'
    fs.unlinkSync(pathFile)
    console.log('Finalizo el borrado del archivo')
}

function handleError() {
    console.log('[Sync] Manejo de errores al manipular archivos.')

    try {
        console.log('intentando leer el contenido de un archivo...')
        const data = fs.readFileSync('./text-output-file.txt', 'utf-8')
        console.log('aca el contenido:\n', data)
    }catch(error){
        console.log('ha ocurrido un error', error.message)
    }
}

handleError()


