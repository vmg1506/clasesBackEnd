let mensaje = 'Hola Mundo';
const PI =  {value:3.1416 }; //MUTACIONES { SE CAMBIA UNA CONSTANTE MEDIANTE UN OBJETO }

const Array = [1, 2, 3, 4, 5];

 Array[0]= 'Hola'

 Array[4]= 'Mundo'

 console.log(Array);

 

function saludar (nombre) {
    nombre = "Victor"
    let mensaje = `Hola ${nombre}`;
    console.log(mensaje);
}

function foo() {
    if (true) {
        let mensaje = "Hola mundo desde foo";
        console.log(mensaje)
    }
    console.log(mensaje);
}

saludar();
foo();

