class user {
    constructor(firstName, lastName, age, adress) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.adress = adress
    }

    getFullNmae() {
        return `${this.firstName} ${this.lastName}`
    }

    incrementAge() {
        this.age++
    }
    getAge() {
        return this.age;
    }
}

const userOne = new user('victor', 'grajales', 32, 'calle')
const userTwo = new user('valentina', 'grand', 29, 'leonora')
const userThree = new user('ana', 'grajales', 0, 'leonora')

console.log(userOne.getFullNmae())
userOne.incrementAge()
console.log(userOne.getAge())

console.log(userTwo.getFullNmae())
userTwo.incrementAge()
console.log(userTwo.getAge())

console.log(userThree.getFullNmae())
userThree.incrementAge()
console.log(userThree.getAge())