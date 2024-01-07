//Nullish Coalescing Operator (??) null undefined

let val1;
val1=null??120//sets value on RHS when Null or undefined
console.log(val1);

let val2;
val2=12??120//sets value on RHS when Null
console.log(val2);

let val3;
val3=undefined??null??20//sets value on RHS when Null or undefined
console.log(val3);
