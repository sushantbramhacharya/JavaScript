//Immediately Invoked Function Expressions IIFE
//used to remove population from global scoped vars

(function display()
{
    //named iife
    console.log("Hello World");
})();
//need semicolon before iife to work
let username="sush";
(function display()
{
    //unnamed iife
    console.log("Hello World"+username);
})();