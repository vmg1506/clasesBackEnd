let name = '     victor grajales     '


/* console.log('name: ', name.trim(), '*') */

let arrayAnidado = [
    1,
    2,
    3,
    [4, 5, 6, [7, 8, 9]],
    [10, 11, 12]
]


console.log('arreglo anidado: ', arrayAnidado)
console.log('arreglo anidado flat: ', arrayAnidado.flat())
console.log('arreglo anidado flat: ', arrayAnidado.flat().flat())

async function example(mode) {
    if (mode === 'calculator') {
        const Calculator = await require('./calculator')
        const calc = new Calculator()
        console.log(calc.sum(15, 10))
    }else {
        console.log('No mode selected')
    }
}

example('calculator')