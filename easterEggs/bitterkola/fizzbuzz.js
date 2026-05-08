const prompt = require("prompt-sync")();

const num = Number(prompt("Enter your number: "));

if(num % 3 == 0 && num % 5 == 0){
    console.log("FizzBuzz")
} 
else if(num % 3 == 0){
    console.log("Fizz")
} else if(num % 5 == 0){
    console.log("Buzz")
}
