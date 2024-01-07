console.log(null===undefined);//false
console.log(null==undefined);//true
console.log(null==0);//false
console.log(null>0);//false
console.log(null<0);//false
console.log(null>=0);//true
//null is considered less than any number when compared using the less than or equal to (<=) or greater than or equal to (>=) operators because null gets coerced to 0.
console.log(null<=0);//true


console.log()
console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false
console.log(undefined>=0);//flase
console.log(undefined<=0);//false