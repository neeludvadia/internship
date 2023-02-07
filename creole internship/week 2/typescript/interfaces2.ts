interface Person {
    name: string
    age: number
}

interface Employee extends Person {
    gender: string
    empcode: number
}

let emp = <Employee>{};
emp.name = "neel"
emp.gender= "Male"
emp.age= 21
emp.empcode= 7007

console.log("Name:"+emp.name);
console.log('employeecode: '+emp.empcode);
export {};