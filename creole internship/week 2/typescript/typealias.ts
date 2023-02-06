type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "honda"
const carModel: CarModel = "amaze"
let car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);