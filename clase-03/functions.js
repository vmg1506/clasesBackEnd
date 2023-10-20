/* let setData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newSetData = setData.map(function(value, index, array) {
    console.log('Map :',  value, index)
    return value + 1
})

console.log(newSetData)
 */

let setData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('setData: ', setData)

const myMap = (array, callback) => {
    let newArray = [];
    for (let i = 0; i<array.length; i++){
        newArray.push(callback(array[i], i, array))
    }
    return newArray;
}

const newSetData = myMap(setData, (value) => {
    return value **2
});

console.log('newSetData: ', newSetData)



Array.prototype.myMap = function(callback) {
    const newArray = [];
    for(let i = 0; i <this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const newsetData2 = setData.myMap(value => value ** 2)

console.log('newSetData2: ', newsetData2)


const sum = (a, b) => a + b;
const res = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calc = (a, b, callback) => {
    console.log(`${a} ${callback.name} ${b}`)
    return callback(a, b);
}

 console.log('calc', calc(2, 3, sum))
 console.log('calc', calc(2, 3, res))
 console.log('calc', calc(2, 3, mul))
 console.log('calc', calc(2, 3, div))


 const { existFile, readFile, writeFile } = require('./my-fs')

 //1. VALIDAR SI EXISTE UN ARCHIVO - existFile(fileInput, callback)
 //2. LEER ARCHIVOS - readFile(fileInput, callback)
 //3. ESCRIBIR ARCHIVO - writeFile(fileOutput, content, callback)

 const copyFile = (fileInput, callback) => {
    existFile(fileInput, (error, exist) => {
        if(error) {
            return callback(error)
        }else if (!exist) {
            return callback(new Error('El archivo no existe'))
        }
        readFile(fileInput, (error, content) => {
            if(error) {
                return callback(error);
            }
            const fileOutput = `copy-${fileInput}`
            writeFile(fileOutput, content, (error) => {
                if(error) {
                    return callback(error)
                }
                callback(null, 'el archivo se copio con exito');
            });
        });
    });
 };

copyFile('texto.txt', (error, result) => {
    if(error) {
        console.error('copyFile', error)
    }else {
        console.log('copyFile', result)
    }
});