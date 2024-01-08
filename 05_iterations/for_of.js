const arr=[1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

const map=new Map();
map.set("Name","Sushant");
map.set("Age","22");

for (const val of map) {//this loop work in Map Data Structure gives us array for each key value pair like[ 'Name', 'Sushant' ]
    console.log(val);
}

// const obj={
//     name:"sushant",
//     age:"22"
// }
// for (const val of obj) {//this doesnt work here becauese objects are non iterable
//     console.log(val);
// }