interface shapes{
    width:number
    height:number
}
abstract class Polygon {
public abstract getarea():number;

public toString(): string {
return `polygon [area = ${this.getarea()}]`;
}
}


class Rectangle extends Polygon implements shapes {
    width:number
    height:number
    constructor( width: number, height:number){
     
        super();
        this.width=width;
        this.height=height;
    }
    public getarea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10,20);
console.log(rect.getarea());