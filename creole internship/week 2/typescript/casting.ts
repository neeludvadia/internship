let xs: unknown = "hello";
console.log((xs as string).length);

//casting using <>

let xp: unknown = 'hello';
console.log((<string>xp).length);

//force casting
let xk= 'hello';
console.log(((xk as unknown)as number));

