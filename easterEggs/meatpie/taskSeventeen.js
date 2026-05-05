const inputCollector = require("prompt-sync")();

const num = Number(inputCollector("What's your number? "))
    
console.log(num + 10)
