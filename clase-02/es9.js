let userData = {
    firstName: 'victor',
    lastName: 'grajales',
    age: 32,
    email: 'vmgrajalesr@gmial.com',
    city: 'manizales',
    password: '123456',
    address: 'calle',
    createAt: new Date(),
    birthday: new Date(1985, 5, 10)
};


function getFullName() {
    /* const firstName = userData.firstName
    const lastName = userData.lastName */
    const { firstName:nombre, lastName:apellido, ...rest } = userData  //SPREAD
    console.log('Toda la data ', rest)
    return `${nombre} ${apellido}`
}


function getDataUser() {
    const { password, ...rest} = userData;
    return rest
}

console.log('getDataUser: ', getDataUser())
console.log('getFullName: ', getFullName());


let dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let [a, b, c, ...rest] = dataSet;// OPERADOR SPREAD ...

console.log('a', a)
console.log('b', b)
console.log('c', c)
console.log('rest', rest)


function cloneUser() {
    const newUser = {
        ...userData,
        email: 'vgrand@gmail.com'
    }
    return newUser
}


function cloneDataSet() {
    const newSet = [-2, -1, 0,
        ...dataSet,10, 11, 12, 13
    ]
    return newSet
}

console.log('cloneUser', cloneUser())
console.log('cloneDataSet', cloneDataSet())

