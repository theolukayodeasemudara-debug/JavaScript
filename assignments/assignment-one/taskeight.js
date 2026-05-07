const user = {
    name: "Ada",
    age:22
}

const prompt = require("prompt-sync")();
const email = prompt("what is your email address? ").toLowerCase().replace(" ", "");

user.email = email

console.log(user)
