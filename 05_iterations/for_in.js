const arr=[1,2,3,4,5]
for (const val in arr) {
    console.log(val);
}//for in loops gives us index of the vals

const map=new Map();
map.set("Name","Sushant");
map.set("Age","22");

for (const val in map) {//this loop doesnt work in Map Data Structure
    console.log(val);
}

const obj={
    name:"sushant",
    age:"22"
}
for (const val in obj) {//this loop work in Objects givng us keys
    console.log(val);
}


for (const [key,val] in arr) {
    console.log(key,val);//doesnt return values
}//for in loops gives us index of the vals


//how do we access then

for (const val in arr) {
    console.log(arr[val]);
}//for in loops gives us index of the vals

//how do we access in obj
for (const val in obj) {//this loop work in Objects givng us keys
    console.log(obj[val]);//needs to use square brackets notation
}