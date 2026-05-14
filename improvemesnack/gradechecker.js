const score_grader = (grade) => {
    let message;

    if (grade >= 70) {
        message = "A"
    } else if (grade >= 60) {
        message = "B"
    } else if (grade >= 50) {
        message = "C"
    } else if (grade >= 40) {
        message = "D"
    } else {
        message = "F"
    }

    return message
}

console.log(score_grader(70))
console.log(score_grader(60))
console.log(score_grader(20))
