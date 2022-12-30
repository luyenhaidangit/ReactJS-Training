//Destructuring Assignment
//Object
const person = {
    name: "luyenhaidangit",
    age: 21,
    andress: "hung yen",
    hobby: "play game",
}

const {name,age} = person;

console.log(name);
console.log(age);

//Array
const animal = ["cat","dog","mouse","chicken"];
const [x,y,,z] = animal;

console.log(x);
console.log(z);