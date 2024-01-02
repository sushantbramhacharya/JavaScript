var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};


console.log(createCounter(10).toString())
//Returns Function and the variables used in the function are stored because of the global scope above it
console.log(createCounter(10)())
//When Called the function it calls anonymously so values of the var used is not stored anythere
console.log(createCounter(10)())
//Called again and doesnt store any vars

const counter = createCounter(10)
//It stores a refernce to this called function which maintains that lexical environemnt
counter() // 10
counter() // 11
console.log(counter());  // 12

 