// write a function that accepts the following car object and returns: This car is available. if available is true.

const car = {
    brand: "Toyota",
    model: "Camry",
    available: true
}

const checkCarAvailability=(car)=> {
  return car.available ? "This car is available" : "This car is not available";
}
console.log(checkCarAvailability(car)); 
