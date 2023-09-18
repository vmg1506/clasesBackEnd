this.variable = "Mensaje desde scope global";

function sumar(a, b) {
    this.variable = `Hola coderhouse`;
    console.log('suma', this.variable)
    return a+b
}

const resta = (a, b) => {
    console.log(this.variable)
    return a - b

}

const restav2 = (a, b) => a- b;


console.log('global', this.variable);

function padre(){
    this.llave = 'sssss';

    const hija =() => {
        console.log('hija => llave', this.llave)
    }
     hija()
     console.log('padre => llave', this.llave)
}

console.log(restav2(5, 3));