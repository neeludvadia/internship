// type script can interfere with type of arrays if it  has values
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

//numbers.push("2");//this gives error
let head: number = numbers[0];
console.log(head);