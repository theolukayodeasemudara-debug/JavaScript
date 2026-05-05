const inputCollector = require("prompt-sync")();

const num = Number(inputCollector("What's your number? "))

cube = num ** 3
console.log(`the cube of ${num} is ${cube}`)
