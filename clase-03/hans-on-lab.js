const sum = (a, b) => {
    return new Promise((res, rej) => {
        if(a === 0 || b === 0) {
            return rej ('Operacion innecesaria')
        }
        const result = a + b;
        if(result < 0) {
            return rej ('Lcalculadora solo debe devolver resultados positivos')
        }
        res(result)
    })
}

const sub = (a, b) => {
    return new Promise((res, rej) => {
        if(a === 0 || b === 0) {
            return rej('operacion innecesaria')
        }
        const result = a+b;
        if(result < 0){
            return rej('la calculadora solo debe devolver resultados positivos')
        }
        res(result);
    })
}

const mult = (a, b) => {
    return new Promise((res, rej) => {
        if(a === 0 || b === 0){
            return rej('operacion innecesaria')
        }
        result = a * b;
        if(result < 0){
            return rej('la calculadora solo debe devolver resultados positivos')
        }
        res(result)
    })
}

const div = (a, b) => {
    return new Promise((res, rej) => {
        if(a < 0 || b <0) {
            return rej('la calculadora solo debe devolver resultados positivos')
        }else if(b === 0) {
            return rej('no se puede dividir por cero')
        }
        const result = a / b;
        res(result)

    })
}


async function cal() {
    try{

        let result = await sum(5, 15)
        console.log(`sum result: ${result}`)
        result = await sub(10, 6)
        console.log(`sub result: ${result}`)
        result = await mult(13, 4)
        console.log(`mult result: ${result}`)
        result = await div(10, 5)
        console.log(`div result: ${result}`)

    }catch(error){
        console.error('calc: ', error)

    }
}

cal()

