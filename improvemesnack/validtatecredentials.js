// write a function that collects a username and password from the user and validate login

const prompt = require("prompt-sync")();
const username = prompt("Enter your username: ")
const password = prompt("Enter your user: ")

const userLogin=(username, login)=>{
    const status = "user logged in successfully";
    return status
}

console.log(userLogin(username,password))
