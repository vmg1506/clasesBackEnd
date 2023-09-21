/* 
let setData = ['a', 'b', 'c', 'd', 'e', 'f', 'g' ,'h', 'i']
let defaultPosition = 0;
let position = defaultPosition ?? 5;

if(position) {
    console.log(' dentro del if')
} else {
    console.log('Dentro del else')
}  

console.log('setData: ', setData[position]) */


class Person {
    #fullname
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#fullname = `${this.firstName} ${this.lastName}`
    }

    getFullname() {
        this.#privateMethod();
        return this.#fullname;
    }

    #privateMethod() {
        console.log('PrivateMethod called: ' )
    }
}

let person = new Person('victor', 'grajales')

console.log('person: ', person.getFullname())


