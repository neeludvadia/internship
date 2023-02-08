function printPersonProperty(person, property) {
    console.log("printing person property ".concat(property, ":\"").concat(person[property], "\""));
}
var person = {
    name: "max",
    age: 27
};
printPersonProperty(person, "name");
