// write a function that takes the following student object and returns the student's name.

const student = {
    name: "Chinedu",
    age: 22,
    course: "Computer Science"
}

const extractName =(student)=>{
    const {name} = student
    
    return name
}

console.log(extractName(student))
