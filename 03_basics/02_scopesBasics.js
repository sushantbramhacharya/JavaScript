var c=300

//maybe its declared in other func or block which may cause some problems

if(true)
{
    let s=10//only used inside the scope
    const b=20//only used inside scope
    var c=30//var gets used/manipulated above its block or scope
}

// console.log(a);
// console.log(b);
console.log(c);