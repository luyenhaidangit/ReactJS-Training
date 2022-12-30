//Var
var name = "luyenhaidangit";

var age = 21;

console.log("Info:",name,age);

//Scope var
function Demo(){
    var number = 10;

    console.log("Check:",number);
}

console.log("Check:",number)

//Let
function DemoLet(){
    var number = 10;

    if(x===10){
        //do some thing
        let y = 5;
    }else{

    }

    console.log("Check:",y);
}

//Const
const numberConst = 15;

numberConst = 20;

console.log("Check const:",numberConst);

//Const exception 
const obj = {};
const arr = [];

x.Name = "luyenhaidangit";

arr.push(1);

console.log("Check obj:",obj);
console.log("Check arr:",arr);