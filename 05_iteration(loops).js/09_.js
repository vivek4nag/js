// reduce method

const myNums = [1, 2, 3]

//Reduce allows you to iterate over an array and accumulate a single output value based on a provided callback function. This method is particularly useful for scenarios where you need to sum values, concatenate items, flatten arrays, or perform any other cumulative operation on an array.
//syntax - array.reduce({callbackFunction}, initialValue);
// ab callback function ke andar hum  accumulator, current value dete hai
// accumulator: The accumulated result from the previous iteration (or the initialValue for the first iteration).
// currentValue: The current element being processed in the array.


myTotal = myNums.reduce( function(acc, currval) {
    console.log(`accumulator value ${acc} and current value ${currval}`);
    return acc + currval;
}, 0)
console.log(myTotal);

// now doing same using arrow function
const arrowTotal = myNums.reduce((accum, curval) => accum + curval, 0)
console.log(arrowTotal);



// aur ek exmaple
const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "python course",
        price : 999
    },
    {
        itemName: "mobile course",
        price : 5999
    },
    {
        itemName: "data science",
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce( (accumulator, item) =>accumulator + item.price, 0)

console.log(totalPrice);
