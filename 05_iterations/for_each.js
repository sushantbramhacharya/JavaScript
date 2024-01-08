//Important Points about For Each
//forEach() does not return anything, i.e., it always returns undefined. 
//It simply iterates through the array elements.
//cannot be stopped or broken out of using break, return, or continue.
const arr=[1,2,3,4,5]
arr.forEach((key,val,arr)=>console.log(key,val,arr));

const map=new Map();
map.set("Name","Sushant");
map.set("Age","22");
map.forEach((key,val,map)=>console.log(key,val,map))

const obj={
    name:"sushant",
    age:"22"
}
Object.keys(obj).forEach(key => {//Object.values(obj) creates array of obj's keys
    console.log(key, obj[key]);
});

Object.values(obj).forEach(val => {//Object.values(obj) creates array of obj's values
console.log(val);
});
