const prompt = require("prompt-sync")();
const speed_value = Number(prompt("Enter your speed range: "))

speed_value == 0 ? console.log("stationary"): speed_value >= 1 && speed_value == 40 ? console.log("slow"): speed_value >= 41 && speed_value == 80 ? console.log("moderate"): speed_value >= 81 && speed_value == 120 ? console.log("fast"): console.log("dangerously fast!!!")
