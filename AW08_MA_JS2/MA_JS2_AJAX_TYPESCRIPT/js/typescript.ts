class Myfruit {
  fruit: string;
  constructor(message: string) {
    this.fruit = message;
  }
  
  name() {
    return "my favorite fruit is " + this.fruit;
  }
}

let nameOfMyfruit = new Myfruit("Strawberry");
console.log(nameOfMyfruit.name())


let truth:boolean = true;
let Name:string = "my name is jonathan";
let Age:number = 32;
let Sentance:string = Name + "and im " + Age + " years old, and thats " + truth;
 
console.log(Sentance);

