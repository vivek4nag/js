const arr = [2, 4, 6, 8, 9];

//map
function double(ele) {
  return ele * 2;
}

function triple(ele) {
  return ele * 3;
}

// function binary(ele) {
//   return ele.toString(2);
// }

const DoubleOutput = arr.map(double);
console.log(DoubleOutput);

const tripleOutput = arr.map(triple);
console.log(tripleOutput);

// we can directly write function as argument & if there is single line we can ommitt return statement
const binaryOutput = arr.map((ele) => ele.toString(2));
console.log(binaryOutput);

//filter

//suppose filter odd values

function isOdd(ele) {
  return ele % 2;
}
const oddValues = arr.filter(isOdd);
console.log(oddValues);

//filter even values

function isEven(ele) {
  return ele % 2 === 0;
}
const evenValues = arr.filter(isEven);
console.log(evenValues);

// reduce
//suppose we want to calculate sum of all element of array
// traditional way
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(arr));

//above thing can be done using reduce ==>
const reduceSum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(reduceSum);


function findMax(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        
    }
    return max
}
console.log(findMax(arr));




const reduceFindMax = arr.reduce(function(acc, curr){
    if( curr > acc) acc = curr;

    return acc
}, 0)

console.log(reduceFindMax);

