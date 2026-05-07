const user = {
    points: 100,
}
let status = " "

const {points} = user

if(points >= 100){
    status = "Gold"
    console.log(status)
} else{
    status = "Silver"
    console.log(status)
}
