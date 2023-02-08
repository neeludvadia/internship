function identity(arg) {
    return arg;
}
var output1 = identity("mystring");
var output2 = identity(100);
console.log(output1);
console.log(output2);
//multitype variables
function displayDataType(id, name) {
    console.log("DataType of id:" + typeof (id) + "\nDataType of Name:" + typeof (name));
}
displayDataType(101, "Neel");
