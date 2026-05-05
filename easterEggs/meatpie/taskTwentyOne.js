const inputCollector = require("prompt-sync")();

const height = Number(inputCollector("What's your height? "))
const base = Number(inputCollector("What's your base? "))
    
const area = 1/2 * height * base
console.log(`the area of your triangle is ${area}`)
