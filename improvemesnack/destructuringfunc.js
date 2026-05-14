// write a function that takes an object and uses destructuring to extract the name and salary properties from it

const employee = {
    name: "Dapo",
    role: "Engineer",
    salary: 50000,
    Department: "Tech"
}

const destructure = (employee) => {
    const {name, salary} = employee
    return {name, salary}
}

console.log(destructure(employee))
