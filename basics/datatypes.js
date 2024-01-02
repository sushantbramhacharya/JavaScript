//Different data types in js
let Numbers=10
let boolValues=true
let bigNumber=1231235152n
let string="String Data Type"
let nullData=null
let dataNotDefined

console.log(typeof Numbers);//number
console.log(typeof boolValues);//boolean
console.log(typeof bigNumber);//bigInt
console.log(typeof string);//undefined
console.log(typeof nullData);//object
console.log(typeof dataNotDefined);//undefined

//Conversions
let num=Number("10")//Automatically convert into number
let num2=Number("10"+2)//returns 102 becuase treats as string then casts to number
let num3=Number(10+"2")//returns 102 becuase treats as string then casts to number
let str=String(123)
let booleanConversion=Boolean(1)

console.log(num+10);
console.log(num2);
console.log(num3);
console.log(str);
console.log(booleanConversion);
