var car = {
    type: "toyota",
    model: "corolla",
    year: 2010
};
console.log(car);
//objects without an optional properties
// we don't need to dclared it in the objects
//const cars: {type:string, milage:number} = {
//  type: "toyota"
//};
//cars.milage = 2000;
//console.log(cars);// to solve this error we need to add ? in milage
var Cars = {
    type: "toyota"
};
Cars.milage = 2000;
console.log(Cars);
