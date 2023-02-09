interface Person {
    name: string;
    age: number;
}

function printPersonProperty(person: Person, property: keyof Person){
    console.log(`printing person property ${property}:"${person[property]}"`);
    }

    let person = {
        name: "max",
        age: 27
    };
    printPersonProperty(person,"name");
    export {};