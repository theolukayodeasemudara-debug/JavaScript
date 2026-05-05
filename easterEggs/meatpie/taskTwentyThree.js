const inputCollector = require("prompt-sync")();

const num_one = Number(inputCollector("What's your firstName? "))
const num_two = Number(inputCollector("What's your lastName? "))

console.log(`sum = ${num_one + num_two}`)   
console.log()
