const numbers = {}

const generatorNumber = (min, max) => Math.floor(Math.random() * (max -min +1) +1);

for(let i = 0 ; i<= 10000; i++) {
    const num = generatorNumber(0, 20);
    if(!numbers[num]) {
        numbers[num] = 0;
    }

    numbers[num] = numbers[num] + 1
}

console.log('resultado:\n', numbers);