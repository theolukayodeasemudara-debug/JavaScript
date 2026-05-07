const prompt = require("prompt-sync")();
const orderstatus = prompt("what is your order status? ").toLowerCase().replace(" ", "");

const order = {
    status: "pending"
}

order.status = orderstatus
const {status} = order

if(status == "pending"){
    console.log("order processing")
} else if (status == "shipped"){
    console.log("order shipped")
} else if(status == "delivered"){
    console.log("Order delivered")
}
