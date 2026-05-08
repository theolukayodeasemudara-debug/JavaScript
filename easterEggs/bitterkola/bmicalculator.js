const prompt = require("prompt-sync")();

const weight = Number(prompt("Enter weight(kg)? "));
const height = Number(prompt("Enter height(meters)? ")) ** 2;

const bmi =(num1, num2)=>{
    return num1/num2
}

bmi < 18.5 ? console.log("Underweight"):
    bmi >=18.5 && bmi == 24.9? console.log("Normal"):
    bmi > 25 && bmi == 29.9 ? console.log("Overweight"):
    console.log("obese") 

console.log(bmi(weight, height))
