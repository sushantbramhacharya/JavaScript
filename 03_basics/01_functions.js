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
