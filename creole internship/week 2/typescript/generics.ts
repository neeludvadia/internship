function identity<T>(arg:T):T{
    return arg;
}
let output1 = identity<string>("mystring");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);

//multitype variables

function displayDataType<T,U>(id:T,name:U):void{
    console.log("DataType of id:" + typeof(id)+ "\nDataType of Name:"+ typeof(name));
}

displayDataType<number,string>(101,"Neel");

//using generics types with non generics types

function displayDatatype<T>(id:T,name:string):void{
    console.log("Data type od id"+ typeof(id)+"\nDataytpe of Name:"+ typeof(name));
}

displayDatatype<number>(1,"Neel");