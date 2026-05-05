const inputCollector = require("prompt-sync")();

const num = Number(inputCollector("What's your number? "))

square = num ** 2
console.log(`the square of ${num} is ${square}`)
