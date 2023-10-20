 const div = (a, b) => {
    return new Promise((res, rej) => {
        if(b === 0) return rej('No se puede dividir por cero')
        console.log(`${a} / ${b} => ${a / b}`)
        res(a / b)
    })
 }

/* div(5, 0)
    .then((result) => console.log('div success: ', result))
    .catch((error) => console.log('div error: ', error))
    .finally(() => console.log('div end')) */


div(15, 9)
    .then((result) => {
        console.log('div success 1: ', result)
        return div(10, 2)
    })
   .then((result) => {
    console.log('div success 2: ', result);
    return 1;
   })
   .then((result) => {
    console.log('then 3: ', result)
    return 1;
   })
   .catch(error => console.error('div error: ', error))
   .finally(() => console.log('div end'))