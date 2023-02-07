//inheritance
class Car{
    Color:string
    constructor(color:string){
        this.Color=color
    }
}
class Audi extends Car {
    Price: number
    constructor(color:string, price: number){
        super(color);
        this.Price= price;
    }
    display():void{
        console.log("color of the audi car: "+
        this.Color);
        console.log("price if the audi is: "+ this.Price+"M");
    }
}
let audi = new Audi("black",8.5);
audi.display();
export {};