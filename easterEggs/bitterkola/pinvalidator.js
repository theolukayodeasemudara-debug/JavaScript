const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");

if (number.length === 4 && number >= 1000) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN. Must be exactly 4 digits");
}
