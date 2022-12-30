//Optional chaining (.)
let user = {
    say(){
        alert("Hello");
    },
    name:"luyenhaidangit",
};

let admin = {};

console.log(user?.name?.full);

console.log(user?.name?.full??"not found");

user?.say?.();

console.log(user?.["name"]);