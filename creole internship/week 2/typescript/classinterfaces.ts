interface Person {
    firstname:string;
    lastname:string;
    age:number;
    fullname();
    getage();
}

class employee implements Person{
    firstname: string;
    lastname: string;
    age: number;
    fullname(){
        return this.firstname+" "+ this.lastname;
    }
    getage() {
        return this.age;
    }

constructor(firstn:string, lastn:string, getage:number){
    this.firstname=firstn;
    this.lastname=lastn;
    this.age=getage;
}
}
let employe = new employee('neel','udvadia',21)

let fullname = employe.fullname();
let age = employe.getage();
console.log ("name of Person:"+fullname+'\nage'+age);
export {};