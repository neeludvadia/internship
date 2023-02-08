interface People{
    name: string
    age: number
}

interface Celebrity extends People{
    profession:string
}

function printName<T extends Celebrity>(input:T): void{
    console.log(`Name: ${input.name}\nAge: ${input.age}\nprofession:${input.profession}`);

}

let player:Celebrity = {
    name:'Neel Udvadia',age:30,profession:'web developer'
}

printName(player);