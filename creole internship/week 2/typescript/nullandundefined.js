var value = null;
console.log(typeof value);
value = "hello";
console.log(typeof value);
value = undefined;
console.log(typeof value);
//nulish coalesence
function printmilage(milage) {
    console.log("milage: ".concat(milage !== null && milage !== void 0 ? milage : 'not available'));
}
printmilage(null);
printmilage(0);
