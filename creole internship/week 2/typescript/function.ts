function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());

//void return type
function printhello():void {
    console.log("hello");
}
printhello();

//parameters
function multiply(a:number,b:number){
    return a*b;
}
console.log(multiply(2,3));

//optional parameters

function add(a:number, b:number,c?:number){
    return a+b+(c||0);
}
console.log(add(2,3));


