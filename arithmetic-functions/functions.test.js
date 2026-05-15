const {addNumbers, subtractNumbers} = require("./functions")

// function takes in a name and an arrow function
test("test addition of two positive numbers", ()=>{
    let firstNumber = 80
    let secondNumber = 20
    expect(addNumbers(firstNumber,secondNumber)).toBe(100)
    
})

test("test that addition of two negative numbers gives a negative result", ()=>{
    let firstNumber = -10
    let secondNumber = -5
    expect(addNumbers(firstNumber,secondNumber)).toBe(-15)
    
})


test("test that addition of a positive number and a negative number returns a value", ()=>{
    let firstNumber = 82
    let secondNumber = -18
    expect(addNumbers(firstNumber,secondNumber)).toBe(64)
    
})

test("test that subtraction of two positive numbers", ()=>{
    let firstNumber = 80
    let secondNumber = 10
    expect(subtractNumbers(firstNumber,secondNumber)).toBe(70)
    
})

test("test that subtraction of two positive numbers", ()=>{
    let firstNumber = 80
    let secondNumber = 10
    expect(subtractNumbers(firstNumber,secondNumber)).toBe(70)
    
})

test("test that two negative number subtraction gives accurate result", ()=>{
    let firstNumber = -8
    let secondNumber = -3
    expect(subtractNumbers(firstNumber,secondNumber)).toBe(-5)
    
})



