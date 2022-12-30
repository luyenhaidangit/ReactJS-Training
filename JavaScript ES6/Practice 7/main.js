//Spread Syntax
//Copy
//Array
const arr1 = [1,2,3];
const arr2 = [3,4,5];
const arr3 = [...arr1,...arr2];
const arr4 = [...arr2,...arr1];
const arr5 = [...arr1,10,0,6];//push
const arr6 = [6,...arr1];//unshift

console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

//Object
//Rewrite update
const obj = {
    name:"luyenhaidangit",
    age:21,
}

const obj1 = {
    job: "development",
    hobby:"play game",
}

const obj2 = {andress:"hung yen"};

const update = {...obj,...obj1};


console.log({...obj});
console.log(update);
console.log({...obj1,...obj2});
console.log({...obj1,andress:"hung yen"});