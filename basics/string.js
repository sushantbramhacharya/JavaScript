const name = "sushant"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sushant-gg-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

const gameName1 = new String('pubgm')
console.log(gameName1.length);//6 as length
console.log(gameName1.toUpperCase());
console.log(gameName.charAt(2));//gives char at that index
console.log(gameName.indexOf('t'));//gives index of specific char

const newString = gameName.substring(0, 4)//starts from 0 but stops before 4
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sushant    "
console.log(newStringOne);
console.log(newStringOne.trim());//removes leading and ending whitespaces

const url = "https://sushant.com/sushant%20bram"

console.log(url.replace('%20', '-'))//replaces

console.log(url.includes('hacharya'))//false beacuse string doesnt includes it

console.log(gameName.split('-'));//make array like [ 'sushant', 'gg', 'com' ]