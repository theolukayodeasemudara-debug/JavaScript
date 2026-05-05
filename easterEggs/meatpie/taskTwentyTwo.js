const inputCollector = require("prompt-sync")();

const radius = Number(inputCollector("What's your radius? "))
    
const area = 3.142 * radius ** 2
console.log(`the area of your triangle is ${area}`)
