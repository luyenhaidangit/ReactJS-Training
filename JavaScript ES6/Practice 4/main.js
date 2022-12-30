//Arrow Function
function Demo(){
    console.log("ok");
}

Demo1 = ()=>{
    console.log("ok1");
}

Demo2 = ()=> console.log("ok2");

Demo3 = ()=> "ok3";

Demo4 = (name) => "My name is " + name;

Demo();
Demo1();
Demo2();
console.log(Demo3());
console.log(Demo4("Dang"));