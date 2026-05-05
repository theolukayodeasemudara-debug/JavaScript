const inputCollector = require("prompt-sync")();

const length = Number(inputCollector("What's your length? "))
const width = Number(inputCollector("What's your width? "))
    
const area = length * width
console.log(`your area is ${area}`)
