var Person = /** @class */ (function () {
    function Person(name) {
        this.name1 = name;
    }
    Person.prototype.getName = function () {
        return this.name1;
    };
    return Person;
}());
var person = new Person("Neel");
console.log(person.getName());
//adding visibility modifier into constructor
var student = /** @class */ (function () {
    function student(name) {
        this.name = name;
    }
    student.prototype.getName = function () {
        return this.name;
    };
    return student;
}());
var Persons = new student("Neel");
console.log(Persons.getName());
