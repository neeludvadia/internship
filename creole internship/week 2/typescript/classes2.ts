class Person{
    private name1: string;//name1 is private
    //adding read only will prevent it from changing its value later

public constructor(name:string){
this.name1 = name;
}
public getName(): string{
    return this.name1;
}
}
const person = new Person("Neel");
console.log(person.getName());


//adding visibility modifier into constructor
class student{
    public constructor(private name: string){}
    public getName(): string {
        return this.name;
    }
}


const Persons = new student("Neel");
console.log(Persons.getName());