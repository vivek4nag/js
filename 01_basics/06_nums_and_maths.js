const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);// string bana dega & string bn jaye to string ke functions kaam me laga skte

console.log(balance.toFixed(3)); //to format a number to a fixed number of decimal places, returning the result as a string. here 3 signify number of digits after decimal op 100.000


//toPrecision() - used to format a number to a specified precision (total number of significant digits) and returns the result as a string. Unlike toFixed(), which focuses on the number of digits after the decimal point, toPrecision() deals with the overall number of significant digits in the number.
const otherNum = 1233.8966
console.log(otherNum.toPrecision(3));
//agr precision 3 rkhe & number 3.8966 ho to op - 3.90
// num = 23.8966 - op = 23.9
//num = 123.8966 - op = 124
//num = 1233.8966 - op = 1.23e+3  (3 significant digit... baaki exponential notation)
//num = 0.00456789 - op = "0.00457" (3 significant digits)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //used to convert a number, date, or array into a string, using a language-sensitive representation . en-IN lagane se indian standard se comma lag jaayga 
const date = new Date();
console.log(date.toLocaleString()); //US standard me dega with mnth - date - year
console.log(date.toLocaleString('en-IN')); //desi standard with date- month - year

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); //largest integer that can be accurately represented and manipulated using the Number data type
console.log(Number.MIN_SAFE_INTEGER);


// ************************** MATHS ***************************************

//Math default built in aata hai JS me 

console.log(Math);
console.log(Math.abs(-56)); //absolute value
console.log(Math.round(54.665)); //round off kr dega
console.log(Math.ceil(52.36));
console.log(Math.floor(52.36));
console.log(Math.sqrt(81));
console.log(Math.min(4, 7, 5, 86, 65, 0)); //will give the minimum of the values
console.log(Math.max(4, 7, 5, 86, 65, 0)); //max value

console.log(Math.random()); // generate a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log((Math.random()*10) + 1);

// To get a random integer between two values, you can use Math.floor() or Math.ceil() in conjunction with Math.random().
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

















