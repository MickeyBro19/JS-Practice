const a = 100;
console.log(a);

const b = new Number(400);
console.log(b);

const balance = 123.56789;

console.log(balance.toFixed(2)); //defines no. decimal points
console.log(balance.toPrecision(4)); //rounds off data

const hundreds = 10000000000;
console.log(hundreds.toLocaleString("en-IN")); //inserts comma at positions

/* OUTPUT 
    100
    [Number: 400]
    123.57
    123.6
    10,00,00,00,000
*/

const min = 10;
const max = 15;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //getting a random number between max and min
