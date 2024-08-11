let score = "33abc" 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // Number class - class ka 1st letter capital hota hai

let score1 = "33bc" //though it is not a number, yet it will be converted to number by Number class
//but if we print simply valueInNumber - it will give op not a number
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); //number op jabki 33bc is not a number
console.log(valueInNumber1); //op NaN - not a number

let score3 = null
console.log(typeof score3); //null is an object
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); 
console.log(valueInNumber3);

let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);// op NaN bcz undefined is not a number

let score5 = true
let valueInNumber5 = Number(score5)
console.log(valueInNumber5); // true ka op ayga 1 & false ka 0

let score6 = "vivek"
let valueInNumber6 = Number(score6)
console.log(valueInNumber6); //op will be not a number bcz such string can't be converted to number


//hence summary
// "33" => 33 - string can be converted to number
//"33bc" => NaN
//true => 1 & false => 0

//number to boolean conversion
let isLoggedIn = 454
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // if 0 then false warna true

//string to boolean conversion - empty string to false & string me kuch ho to true

let x = ""
let y = "hello"
let booleanX = Boolean(x) //empty string hence false
let booleanY = Boolean(y) //bhara hua string so true
console.log(booleanX);
console.log(booleanY);

// number to string conversion
let num = 33
let stringNum = String(num)
console.log(stringNum);
console.log(typeof stringNum); //it will give op as string


// *********************** Operations ***********************

/* let value = 3
let negValue = -value 
//console.log(negValue); //op -3
console.log(2+2);
console.log(2*3);
console.log(2**5); // this is 2 to the power 3 - ** lgane se power denote krta
console.log(2/3);
console.log(2%3); */

let str1 = "hello"
let str2 = " vivek"
let str3 = str1 + str2
console.log(str3); //2 string juud jaaygi

console.log("1" + 2); //op 12  / pehle string hai to pura string
console.log(1 + "2"); //op 12
console.log("1" + 2 + 2); // op 122
console.log(1 + 2 + "2"); // op 32 //pehle numerical hai to wo pehle then string append
//upar wale me basically jo pehle hai wo convresion hoga





















