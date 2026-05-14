// write a function that accepts a person's age and returns Child, Teen, or Adult

const prompt = require("prompt-sync")();
const age = Number(prompt("Enter your age: "))

const ageChecker =(age)=>{
    if (age < 10){
        let category = "Child"
        return category
    } else if (age > 10 && age <= 18){
        let category = "Teen"
        return category
    } else{
       return "Adult"
    }
}


console.log(ageChecker(age))

