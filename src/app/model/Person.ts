export class Person {
    id:number=1;
    name:string;
     age:number;
     address:string;
    hide:boolean;
    constructor(id:number,name:string, age:number,address:string){
        this.id=id;
        this.name = name;
        this.age=age;
        this.address=address;
        this.hide=false;
    }

    //string = primnitive data type
    //String = String wrapper - 

   
    toggle() {
        this.hide = !this.hide;
    }
}