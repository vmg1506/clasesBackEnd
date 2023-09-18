
let usuario = {
    nombre: "victor",
    edad: 31
}

let body = 'Hola ' + usuario.nombre + ' espero te encuentres muy bien.\n' + 'queremos avisarte de nuestras nuevas ofertas de seguro de vida';

const edadFutura = usuario => usuario.edad +1

let body2 = `Hola ${usuario.nombre} espero que te encuentres muy bien
queremos avisarte de nuestras nuevas ofertas de seguro de vida.
Hemos visto que cumpliras ${edadFutura(usuario)} muy pronto, y queremos darte un obsequio`;


console.log('Correo: ', body2)


const lista = [1, 2, 3, 4, 5];

function mostrarLista(arr) {
    if(arr.length == 0) {
        console.log('La lista esta vacia') 
    }else{
        for(let i=0; i<arr.length; i++){
            console.log(arr[i])
        }
        let mensaje = `La lista tiene un total de ${arr.length} elementos`
        console.log(mensaje);
    }
}


mostrarLista(lista)






