// write a function that checks whether a number is positive, negative or zero

const number_checker =(num)=>{
    if(num < 0){
        let num = "negative"
        return num
    } else if(num > 0){
        let num = "positive"
        return num
    } else if(num === 0){
        let num = 0
        let message = "number is zero"
        return message
    }
}

console.log(number_checker(20))
console.log(number_checker(-20))
console.log(number_checker(0))
