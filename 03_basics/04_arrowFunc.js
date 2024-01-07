const user={
    username:"sush",
    welcomeMessage:function()
    {
        //this refers to current context
        console.log(`welcome to ${this.username}`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);//returns nothing in node js but window in browser

// function test()
// {
//     let username="user"
//     console.log(this.username)//this cant be used inside func
// }
// test()

// const func=function(){
//     console.log(this)//returns Object with performance info
// }
// func()

// const arrow=()=>{
//     console.log(this)//returns nothing
// }
// arrow()

// const adder=(num1,num2)=>num1+num2//implicit return
const adder=(num1,num2)=>({total:num1+num2})
console.log(adder(3,4))