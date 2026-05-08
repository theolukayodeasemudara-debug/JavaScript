const prompt = require("prompt-sync")();

const num_one = Number(prompt("Enter first integer: "));
const num_two = Number(prompt("Enter second integer: "));

if (num_one === 0) {
    console.log("Can't divide by zero");
} else if (num_two % num_one === 0) {
    console.log(`${num_two} is a multiple of ${num_one}`);
} else {
    console.log(`${num_two} is not a multiple of ${num_one}`);
}
