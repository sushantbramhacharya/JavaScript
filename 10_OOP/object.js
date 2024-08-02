function multiply(num)
{
    return num*2;
}
//functions are objects
//Array->Object->null
//String->Object->null
//Function->Object->null
//Protypical inheritance

multiply.power=2

console.log(multiply(2));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(username,score)
{
    this.username=username
    this.score=this.score
}

createUser.prototype.increment=function()
{
    this.score++
}