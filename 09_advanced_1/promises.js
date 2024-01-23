//Past there were Bluebird and Q for promises and then introduced promise in ES6
const promiseOne=new Promise(
    function(resolve,reject)
    {
        //Do async task
        //DB Calls, Cryotography
        setTimeout(function(){
            console.log("Async task is complete");
            resolve();
        },1000)
    }
)

promiseOne.then(()=>{
    //Runs after Resolve
    console.log("Promise consumed")
})

new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        console.log("Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})
const promiseThree=new Promise(
    function(resolve,reject)
    {
        setTimeout(function(){
            console.log("Async task is complete");
            resolve({username:"Sushant",email:"xxx@yyy.ccc"});//sending data in then
        },1000)
    }
)
promiseThree.then((data)=>{
    console.log(data);
})
const promiseFour=new Promise(
    function(resolve,reject)
    {
        setTimeout(function(){
            let error=false;
            if(!error)
            {
                resolve({username:"Sushant",email:"xxx@yyy.ccc"})
            }
            else
            {
                reject("Error")
            }
        },1000)
    }
)
promiseFour.then((data)=>{
    console.log(data);
    return data.username//goes in next chain
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected!!");
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({username:"JS",email:"xxx@yyy.ccc"})
        }
        else
        {
            reject("Error:JS Went Wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const resp=await promiseFive
        console.log(resp);
    }
    catch(error)
    {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers()
// {
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
//         const data=await response.json();//takes time
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
    return resp.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})