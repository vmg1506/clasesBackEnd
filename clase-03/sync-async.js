function one() {
    console.log('(1) incia funcion uno')
    two();
    console.log('(2) fin funcion uno')
}


function two() {
    console.log('(3) incia funcion dos')
    three();
    console.log('(4) fin funcion dos')
}

function three() {
    console.log('(5) incia funcion tres')
    console.log('(6) fin funcion tres')
}

one()



const  { writeFile } = require('./my-fs')
writeFile('texto.txt', 'hola mundo', (error, result) => {
    if(error) return console.error('writeFile: ', error)
    console.log("se escribio en el archivo exitosamente");
    console.log('Fin del programa');
});

const div = (a, b) => {
    return new Promise((res, rej) => {
        if(b === 0) return rej('No se puede dividir por cero')
        console.log(`${a} / ${b} => ${a / b}`)
        res(a / b)
    });
 };

const asynFunction = async () => {
    try {
        const result = await div(2,22)
        console.log('div result: ', result)
    }catch(error){
        console.log('Error: ', error)

    }

}  

asynFunction()