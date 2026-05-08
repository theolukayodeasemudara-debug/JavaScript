const prompt = require("prompt-sync")();

const num_one = Number(prompt("Enter first integer: "));
const num_two = Number(prompt("Enter second integer: "));

const result = num_one > 0 && num_two > 0 ? num_one + num_two :
    num_one < 0 && num_two < 0 ? num_one * num_two :
    num_one > num_two ? num_one - num_two :
    num_two - num_one;

console.log(result);
