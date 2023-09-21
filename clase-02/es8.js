let userData = {
    firstName: 'victor',
    lastName: 'grajales',
    age: 32,
    email: 'vmgrajalesr@gmial.com',
    city: 'manizales'
}


console.log('userData => object.entries', Object.entries(userData))
console.log('userData => object.keys', Object.keys(userData))
console.log('userData => object.values', Object.values(userData))


let taxes = {
    tax1: 0.16,
    tax2: 0.18,
    tax3: 0.20,
    tax4: 0.22
}; 

let taxesValues = Object.values(taxes)

console.log('taxesValues', taxesValues)

let totalTaxes = taxesValues.reduce((total, tax, index) => {
    console.log('total', total);
    console.log('tax', tax);
    console.log('index', index);
    return total + tax;
}, 0)

console.log('totalTaxes', totalTaxes)
