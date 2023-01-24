//Map
const myArr = [1,2,3,4];
const Demo = myArr.map((item)=> item*2);
const myList = myArr.map((item,index)=>{
    console.log(index);
    return item*2;
});

console.log(myList);

//Filter
const ages = [1,20,30,14];
const myListAges = ages.filter((item)=>{
    return item>18;
});

console.log(myListAges);