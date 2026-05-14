// write a program that checks if a number entered by the user is even or odd

const prompt = require("prompt-sync")();

const number = prompt("enter a number: ");

if(number % 2 == 0){
    console.log(`${number} is an even number!`)
} else if(number % 2 != 0){
    console.log(`${number} is an odd number!`)
} else{
    console.log("number is not accounted for!")
}
