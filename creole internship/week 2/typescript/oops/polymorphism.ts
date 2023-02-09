class animal {
    name: string;

    constructor(name:string){
        this.name = name;
    }

    makesound():void{
        console.log("common animal sound");
    }
}

class Dog extends animal{
    makesound():void{
        console.log('bhow bhow');
    }
}

class Cat extends animal {
    makesound():void{
        console.log("meow meow")
    }
}

const mew = new Cat('meowth');
mew.makesound();

const doggy = new Dog("max");
doggy.makesound();