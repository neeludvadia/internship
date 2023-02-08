class Studentinfo<T,U>
{
    private Id: T;
    private Name: U;
    setvalue(id:T, name:U): void{
        this.Id=id;
        this.Name=name;
    }
    display():void{
        console.log(`Id=${this.Id},Name=${this.Name}`);
    }
}

let stud = new Studentinfo<number, string>();
stud.setvalue(21,"Neel");
stud.display();

let std = new Studentinfo<string,string>();
std.setvalue("26","Harsh");
std.display();
export {};