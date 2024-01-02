function func1()
{
    return {
        func2:()=>{
            return "Second Function"
        }
    }
}
console.log(func1())//returns object
console.log(func1().func2())//calls another method form returned object
//We can chain as much as we want