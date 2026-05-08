const prompt = require("prompt-sync")();
const salary = prompt("Enter your salary to calculate tax value: ")

salary <= 300000 ? console.log("no tax!!!"): salary > 300000 && salary == 600000 ? console.log(salary * 0.15): console.log(salary * 0.25)

