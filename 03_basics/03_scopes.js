function one()
{
    const username="sushant"
    function two()
    {
        const website="youtube"
        console.log(username)
    }
    two()
}

one()

console.log(addone(5));// can use before declaration

function addone(num)
{
    return num+1
}

addTwo(5)//cant be used

const addTwo=function(num){
    return num+2;
}

