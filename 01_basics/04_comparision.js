/* console.log(2 > 8);
console.log(2 <=9);
console.log(2!= 8);*/

console.log("2" > 1);
console.log("02" > 1);
//above both will give tru bcz JS khud se string ko number me convert kr dega. but DON'T do this & make sure that both datatypes are same

console.log(null > 0); //op false
console.log(null == 0); //op false
console.log(null >= 0); // op true
//above results are so bcz in JS equality check (==) & comparisons work differently
// comparison convert null to a number , treating it as zero
//hence in 1st instance null > 0 gave false
// but null >= 0 gave true bcz null has been converted to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log( undefined >= 0);
// op false for all case bcz undefined is only considered equal to null while using == operator. undefined is not equal to any other value 

console.log(undefined == null); // op true
//while using loose equality operator undefined is considered null hence true

// === strict equality operator - check value as well as datatype i.e. used to compare two values for equality without performing any type conversion
console.log(5 === '5'); // false  bcz number vs string
console.log(5 === 5); // true bcz num vs num
console.log(true === 1);    // false (boolean vs. number)









