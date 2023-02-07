function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void return type
function printhello() {
    console.log("hello");
}
printhello();
//parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
//optional parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 3));
