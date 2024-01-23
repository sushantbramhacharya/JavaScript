//constructor function
function User(username,loginCount,isLoggedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isLoggedIn;

    return this;
}
const userOne=User("sushant",1,true)
const userTwo=User("ram",1,true)
const userThree=new User("ram",1,true)

console.log(userOne);//user two overrides user one
//new create new instance

