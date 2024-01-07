//Array
const myArr = [0,1,2,3,4]
//Array is an non primitive object (referenced)
//Can be resizable in js
//Can contain multiple Datatypes
//Same refernces shallow copies
//Deep copies are primitives
const heros=['Dr sanduk ruit','iron man','batman']
const nums=new Array(1,2,3,4);

//Methods
// myArr.push(6);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

//shifts all element so array indexing gets changed
// myArr.unshift(10)//inserts on 1st element shift right
// console.log(myArr)
// myArr.shift()//removes 1st element and shift left
// console.log(myArr)

// console.log(myArr.includes(9))//gives boolean values
// console.log(myArr.indexOf("js"))//gives -1 if not found and gives index

// const newArr=myArr.join();//converts into string
// console.log(newArr);

//slice and splice
console.log("A ",myArr);
const newArr0=myArr.slice(1,3);//1 is inclusive and 3 is exclusive doesnt original manipulate array
console.log(newArr0);
console.log("B ",myArr);

console.log();

console.log("A ",myArr);
const newArr1=myArr.splice(1,3);//manipulates original array and remove elements 1 and 3 are inclusive
console.log(newArr1);
console.log("B ",myArr);