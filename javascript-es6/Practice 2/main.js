//Classes
class Person{
    constructor(name,andress){
        this.name = name;
        this.andress = andress;
    }

    getAddress(){
        return this.andress;
    }
}

const person1 = new Person("luyenhaidangit","Hung Yen");
console.log("Check person:",person1);
console.log(person1.getAddress());

//Inhertance
class Animal{
    constructor(){

    }

    doAction(){
        return "Run";
    }
}

class Dog extends Animal{
    constructor(model){
        super();
        this.model = model;
    }
}

const dog = new Dog("Go");
console.log(dog);
console.log(dog.doAction());