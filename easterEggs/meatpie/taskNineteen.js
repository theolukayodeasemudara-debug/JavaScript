const inputCollector = require("prompt-sync")();

const num = Number(inputCollector("What's your number? "))
    
const remainder = num % 2
console.log(`your remainder is ${remainder}`)
