interface array1 {
    [index:number]:string
}

let Names:array1;
Names=["neel","harsh","parth"];

interface array2{
    [index:number]:number
}

let age:array2;
age=[21,23,24];

console.log("my age is: "+age[1]);
export {};
