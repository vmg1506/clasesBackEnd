const { promises: fs } = require('fs')

async function readFile(){
    const pathFile = './text-output-file.txt';
    const content = await fs.readFile(pathFile, 'utf-8' )
    console.log('content', content)
}

async function writeFile() {
    const pathFile = './text-output-file.txt'
    const content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolorum id distinctio repellendus obcaecati voluptate, reiciendis eaque! Labore debitis, ipsa numquam qui amet et distinctio, modi placeat repellendus dicta perspiciatis?.\n';
    await fs.writeFile(pathFile, content, 'utf-8')
}

async function appendFile() {
    const pathFile = './text-output-file.txt'
    const content = 'Texto agredo con appendFile.\n';
    await fs.appendFile(pathFile, content, 'utf-8')
}


async function unlinkFile() {
    const pathFile = './text-output-file.txt'
    await fs.unlink(pathFile)
}

writeFile()
appendFile()
readFile()
unlinkFile()

