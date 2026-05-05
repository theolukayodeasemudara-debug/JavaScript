const inputCollector = require("prompt-sync")();

let sum = 0
for(counter = 1;counter <= 3; counter++){
    const num = Number(inputCollector("What's your number? "))
    
    sum+=num
}
console.log(sum/5)
