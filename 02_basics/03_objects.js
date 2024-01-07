//Singleton only creates from constructor
// Object.create()

//Litertals method

const mySym=Symbol("key1")

const user={
    [mySym]:"sushKey",//Symbol as a key
    "name":"sush",//cant be accessed through .
    age:19,
    email:"xxx@yyy.ccc",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday"]
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mySym]);

// user.email="sush@google.com"
// Object.freeze(user)//freezing object so it cannot be changed
// user.email="sush@gmail.com"
// console.log(user)

user.greeting=()=>{
    console.log("Hello User");
}
// user.greetingTwo=()=>{
//     console.log(`Hello User ${this["name"]}`);//Cant use this in arrow func gathers from surounding code
// }
user.greetingTwo=function(){
    console.log(`Hello User ${this["name"]}`);
}
console.log(user.greeting);//returns reference
user.greeting();
user.greetingTwo();


