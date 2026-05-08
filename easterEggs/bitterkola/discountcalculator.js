const prompt = require("prompt-sync")();

const price = Number(prompt("Enter price? "));
const discount = Number(prompt("Enter discount? "))/100;

const new_price = price - (price * discount)

console.log(new_price)

