function loginUserMsg(username="Sam")//Default Args
{
    if(username === undefined)//equals to !username
    {
        console.log("Please enter username")
        return
    }
    return `${username} just Logged In`
}
// console.log(loginUserMsg("sush"))
// console.log(loginUserMsg())//returns undefined if doesnt give param

function calculateCartPrice(val1,val2,...num1)//Rest Operator can accept multiple args
{
    return num1
}

console.log(calculateCartPrice(200,400,500,800,1000))//200 and 400 goes to val1 and val2

const user={
    username:"sush",
    ages:22
}

function handleObject(anyobj)
{
    console.log(`Username is ${anyobj.username} age is ${anyobj.age}`)

}

// handleObject(user)
handleObject({
    username:"sam",
    age:19
})
