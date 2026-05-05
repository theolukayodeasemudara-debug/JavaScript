const inputCollector = require("prompt-sync")();

const name = inputCollector("What's your name? ")
const age = Number(inputCollector("How old are you? "))
    
console.log(`I am ${name} and I am ${age} years old.`)
