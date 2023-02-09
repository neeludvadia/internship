interface shapes{
    width: number
    height: number
    getArea:()=>number;
}
class Rectangle implements shapes{
    width: number
    height: number
    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
        } 
        getArea():number{
            return this.width;
    }
}
class square extends Rectangle {
    constructor(width:number){
        super(width,width); 
    }
}

const sq = new square(20);
const rec = new Rectangle(10,10);
console.log(sq.getArea());

export {};