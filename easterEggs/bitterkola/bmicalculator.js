const prompt = require("prompt-sync")();

const weight = Number(prompt("Enter weight(kg)? "));
const height = Number(prompt("Enter height(meters)? ")) ** 2;

const bmi = (num1, num2) =>{
    return num1/num2;
}

const bmiValue = bmi(weight, height);

bmiValue < 18.5 ? console.log("Underweight") :
bmiValue >= 18.5 && bmiValue <= 24.9 ? console.log("Normal") :
bmiValue >= 25 && bmiValue <= 29.9 ? console.log("Overweight") :
console.log("Obese");

console.log(`BMI: ${bmiValue.toFixed(2)}`);
