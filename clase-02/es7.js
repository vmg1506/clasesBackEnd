function oldPow(base, exponent) {
    return Math.pow(base, exponent)
}

function newPow(base, exponent) {
    return base ** exponent
}

console.log('oldpow', oldPow(2, 3))
console.log('newpow', newPow(2, 3))



let userNames = [
    'victor',
    'valentina',
    'ana',
    'maria'
];

if(userNames.includes('victor')){
    console.log('victor esta en la lista')
}else{
    console.log('victor no esta en la lista')
}

