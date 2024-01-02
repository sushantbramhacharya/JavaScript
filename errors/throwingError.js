function isEqual(val1, val2)
{
    if(val1===val2)
        return true;
    else if(typeof(val1)==typeof(val2))
        return false;
    else
        throw new Error("Not Same Data Type")
}
console.log(isEqual(1,1))//true
console.log(isEqual(1,2))//false
console.log(isEqual(1,"2"))//throws error