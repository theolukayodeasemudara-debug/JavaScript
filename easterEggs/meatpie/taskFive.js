const inputCollector = require("prompt-sync")();

const num_one = Number(inputCollector("What's your first number? "))
const num_two = Number(inputCollector("What's your second number? "))

product = num_one * num_two
console.log("the product is", product)
