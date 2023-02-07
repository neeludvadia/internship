var employee = /** @class */ (function () {
    function employee(firstn, lastn, getage) {
        this.firstname = firstn;
        this.lastname = lastn;
        this.age = getage;
    }
    employee.prototype.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
    employee.prototype.getage = function () {
        return this.age;
    };
    return employee;
}());
var employe = new employee('neel', 'udvadia', 21);
var fullname = employe.fullname();
var age = employe.getage();
console.log("name of Person:" + fullname + '\nage' + age);
