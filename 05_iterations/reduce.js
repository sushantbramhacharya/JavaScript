//reduce returns accumulator
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
    console.log(accumulator,currentValue)
    return accumulator + currentValue;
}, 0);//0 is initial val for accumulator

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

const array = [1, 2, 3, 4];
const sumOfSquares = array
    .map(num => num * num)
    .reduce((acc, val) => acc + val, 0);

console.log(sumOfSquares); // Output: 30 (1^2 + 2^2 + 3^2 + 4^2)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
