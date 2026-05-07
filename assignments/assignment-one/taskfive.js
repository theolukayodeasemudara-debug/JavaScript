
const student ={
    name: "Amaka",
    score: 75
}

const prompt = require("prompt-sync")();
const input = Number(prompt("what is your score? "));

student.score = input; 

const {score} = student
if(score >= 90){
    console.log("A")
} else if(score > 80 && score == 89){
    console.log("B")
} else if(score > 70 && score == 79){
    console.log("C")
} else {
    console.log("F")
}

console.log(score)

