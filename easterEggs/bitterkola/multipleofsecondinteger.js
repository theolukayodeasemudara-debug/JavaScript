const prompt = require("prompt-sync")();

const num_one = Number(prompt("Enter first integer: "));
const num_two = Number(prompt("Enter second integer: "));

for(let index = 0; index < num_one.length; index++){
    console.log(num_one[index]);
}
