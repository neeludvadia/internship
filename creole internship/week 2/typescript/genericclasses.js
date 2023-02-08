"use strict";
exports.__esModule = true;
var Studentinfo = /** @class */ (function () {
    function Studentinfo() {
    }
    Studentinfo.prototype.setvalue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    Studentinfo.prototype.display = function () {
        console.log("Id=".concat(this.Id, ",Name=").concat(this.Name));
    };
    return Studentinfo;
}());
var stud = new Studentinfo();
stud.setvalue(21, "Neel");
stud.display();
var std = new Studentinfo();
std.setvalue("26", "Harsh");
std.display();
