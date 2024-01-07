const user=new Object()

user.id="xyz123"
user.name="Ram"
user.isLoggedIn=false

// Array of keys,values,entries
// console.log(Object.keys(user));//returns keys array
// console.log(Object.values(user));
//  console.log(Object.hasOwnProperty("name"));//returns bool if has properties on obj
// console.log(Object.entries(user));//key value in multi dimensonal array
//[ [ 'id', 'xyz123' ], [ 'name', 'Ram' ], [ 'isLoggedIn', false ] ]

//Enumerable means loopable

const regularUser={
    email:"xxx.yyy.zzz",
    fullname:{
        userfullname:{
            firstname:"sush",
            lastname:"bram"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)//{} because to return object in empty one
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        name:"sush"
    },
    {
        name:"Ram"
    }
]

