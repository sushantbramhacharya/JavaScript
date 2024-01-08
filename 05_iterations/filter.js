//filter() returns a new array containing only the elements for which the callback function returned true. 
//If no elements satisfy the condition, it returns an empty array.
//Supports chaining
const arr=[1,2,3,4,5]
const newArr=arr.filter((val)=>val>2);
console.log(newArr);

//Chaining Example
const newArr1=arr
            .filter((val)=>val>2)
            .filter((val)=>val<5);
console.log(newArr1);