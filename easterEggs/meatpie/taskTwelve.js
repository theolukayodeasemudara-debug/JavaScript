const inputCollector = require("prompt-sync")();

const num_one = Number(inputCollector("What's your first number? "))
const num_two = Number(inputCollector("What's your second number? "))

console.log(`your two numbers are ${num_one} and ${num_two}`)
