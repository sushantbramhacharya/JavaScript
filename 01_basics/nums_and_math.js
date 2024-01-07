//We can create numbers using num object or normal style
let num=123
let num2=new Number(123)//method to creating objects and manipulating

//properties used in math lib
console.log(Math.PI)
console.log(Math.SQRT2)

//some methods
console.log(Math.ceil(2.1));
console.log(Math.abs(-1));
console.log(Math.round(2.1));
console.log(Math.floor(2.1));
console.log(Math.min(1,2,4));
console.log(Math.max(1,2,4));

//mdn docs to study more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.random());//gives random int from 0 to one
console.log(Math.floor((Math.random()*10)+10));//extracting int from 1 to 10

//Formula to get random num from range
min=10
max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//+1 to remove 0