class Person{
    private name:string;

    constructor(name:string){
        this.name=name;
    }

    getname():string{
        return this.name;
    }
}

class human extends Person{
 getname(): string {
     return this.name;
 }
}

const person = new Person("Neel");
const hum = new human("Neel");
console.log(hum.getname());
console.log(person.getname());
export {};