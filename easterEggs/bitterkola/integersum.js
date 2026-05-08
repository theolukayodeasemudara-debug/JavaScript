const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number? "));

let last_digit = number % 10;
let first_digit = Math.floor(number/10000)
console.log(last_digit + first_digit)
