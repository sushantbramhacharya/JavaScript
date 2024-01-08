
const arr=[1,2,3,4,5,"hello"];
const newArr=arr.map((val)=>val);
console.log(newArr);

//Chaining Example
const newArr1=arr
            .map((val)=>{
                if(typeof val ==="number")//removes non number
                    return val;
                })
            .filter((val)=>{
                if(val<5)//removes 5
                    return val;
            });
console.log(newArr1);