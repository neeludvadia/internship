//partial utilities
interface Point{
    x:number;
    y:number;
}

let partial: Partial<Point> = {};
partial.x=12;
console.log(partial);

//required utilities

interface Car{
    make:string;
    model: string;
    milage?: number;
}

let car: Required<Car> = {
    make:"ford",
    model:"focus",
    milage: 12000//required
};

console.log(car);

//Record
const nameAgeMap: Record<string, number>= {
    'Neel': 21,
    "harsh":25
};
console.log(nameAgeMap);

//omit removes keys from the objects
interface Pperson {
    name: string;
    age: number;
    location?: string;
}

const neel:Omit<Pperson,"age"|"location"> = {
    name:"neel"
};
console.log(neel);

//pick removes all only keep the specific type

interface person {
    name: string
    age: number
    location: string
}

const Neel: Pick<person, 'name'> = {
    name: "neel"
}  ;
console.log(Neel);



//exclude removes types
type Primitive = string | number | boolean;
const value: Exclude<Primitive, number> = true;
console.log(typeof value);
export {};


