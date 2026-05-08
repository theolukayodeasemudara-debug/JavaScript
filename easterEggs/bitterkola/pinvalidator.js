const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));
let count = 0
for(; count <= number.length; count++){
    console.log(count)
}
