// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function writeCards(names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

const cards = writeCards(['Ada', 'Lee', 'Joan'], 'wedding');
console.log(cards);

function countDown(number) {
    while (number >=0 ) {
        console.log (number);
        number--;

    }
    return number;
}

newNumber = countDown(10);
console.log(newNumber);