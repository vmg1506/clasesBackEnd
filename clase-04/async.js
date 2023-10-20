

const remenberMe = (message, sec) => {
    const wait  = sec * 1000
    console.log(`Estableciendo recordatorio para los proximos ${sec} segundos`)
    setTimeout(() => {
        console.log(`recordatorio: ${message}`)
    }, wait);
    console.log(`Recordatorio establecido con éxito`)
}


remenberMe('Hola mundo', 10)



const cuentaRegresiva = (seg) => {

    let counter = seg;
    console.log('Iniciamos la cuenta regresiva para el lanzamiento...')

    const idInterval = setInterval(() => {

        console.log(`cuenta  ${counter}`)

        if(counter <= 0){

            console.log('lanzamiento... ')
            clearInterval(idInterval)

        }else {

            counter--

        }
        
    }, 1000)

    
}

cuentaRegresiva(5)
