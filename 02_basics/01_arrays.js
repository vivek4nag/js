// array
// array me same ya mix of different data types 
// resizable hote hai
// array copy operations create shallow copies

const myArr = [0, 1, 2, 3, 4]
const myArr2 = new Array(1,2,3,4) //another way of array decleration
console.log(myArr2[1]);


// array methods

myArr.push(6) //adding data at end
myArr.push(7)
myArr.pop() // remove last value 
console.log(myArr);

myArr.unshift(7) //adds one or more elements to the beginning of an array 
console.log(myArr); // [7, 0, 1, 2, 3, 4, 6]
console.log(myArr.shift()); // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(myArr); // [ 0, 1, 2, 3, 4, 6 ]

console.log(myArr.includes(9)); // returns boolean value whether 9 is included in array or not

console.log(myArr.indexOf(6));

const newArr = myArr.join() // concatenate all the elements of an array into a single string- default separator is comma(,)
console.log(newArr);
console.log(typeof newArr); // string output
const arr = ['apple', 'banana', 'cherry'];
const result = arr.join(' - '); // will join by - 
console.log(result);

//slice & splice

// The slice() method is used to create a shallow copy of a portion of an array, selecting elements from a start index to an end index (not inclusive). The original array remains unchanged.
console.log("A => " ,myArr); // normal array A =>  [ 0, 1, 2, 3, 4, 6 ]
const slicedArray = myArr.slice(1, 3)
console.log(slicedArray); // [ 1, 2 ]
console.log("B => " ,myArr); // B =>  [ 0, 1, 2, 3, 4, 6 ]

// The splice() method is used to add, remove, or replace elements in an array. Unlike slice(), this method modifies the original array.
const splicedArray = myArr.splice(1, 3)
console.log(splicedArray); // [ 1, 2, 3 ]
console.log("C => ", myArr); // C =>  [ 0, 4, 6 ] OG array is chnaged 


















