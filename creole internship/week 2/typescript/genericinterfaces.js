function printName(input) {
    console.log("Name: ".concat(input.name, "\nAge: ").concat(input.age, "\nprofession:").concat(input.profession));
}
var player = {
    name: 'Neel Udvadia', age: 30, profession: 'web developer'
};
printName(player);
