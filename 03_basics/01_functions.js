// function ka syntax - function <naam of function>(){}
function sayMyName(){
    console.log("my name is anthony Gonsalves");
}
//to call a function
//sayMyName() // sirf sayMyName likhenge to wo as refernce kaam krega. ()lgayenge to execurte hoga

//function to add 2 numbers
function addNumber(num1, num2){ // parameters ka data type define nhi krna pdta like int , string 
    console.log(num1 + num2);
    
}
addNumber(3,4) // 7
addNumber(3, "4") // 34
addNumber(3, "a") // 3a
addNumber(3, null) // 3

const result = addNumber(3,5) // 8
console.log("result :" , result); // result : undefined
//undefined aaya bcz print krne se function ki value return hokr result me store nhi ho rha
// so now lets write the function is idiff wayss

function addNumber1(num1, num2){ 
//    let result = num1 + num2
//    return result
   return num1 + num2
}
console.log(addNumber1(5,6));

//another function
function logInUserMessage(username){ // jo parameter pass krenge wo function me use hoga
    if(username === undefined){
        console.log("please enter a valid name");
        return;
    }
    return `${username} just logged in`
}

console.log(logInUserMessage("vivs"));
console.log(logInUserMessage()); // undefined just logged in / if we dont pass any arguments then undefined aata hai null nhi ... isko counter krne ke liye if use kiya 

//to counter undefined arguments we ccan pass default parameter e.g
function loginUser(username = "Sam"){
    return `${username} logged in` 
}
console.log(loginUser("vivek")); //vivek logged in
console.log(loginUser()); // Sam logged in - bcz humne default value de rkhi hai already


//rest operator (...) iska syntax same as spread operator , same 3 dot wala - It essentially "collects" the remaining elements or properties and places them into a new array or object.
function calculateCartSum(no1){ // without rest operator
    return no1
}
console.log(calculateCartSum(200, 300, 400)); // op 200

function calculateCartSum1(...number1){ // rest operator saare arguments ko ek sath array me dalkr de dega
    return number1
}
console.log(calculateCartSum1(200, 300, 400, 50)); // op [ 200, 300, 400, 50 ]

function calculateCartSum2(v1, v2, ...n1){
    return n1
}
console.log(calculateCartSum2(200, 300, 400, 50)); // [ 400, 50 ] bcz v1 me jaayga 200, v2 me 300 baaki rest operator n1me daalkr de dega

//object ko function me kaise pass kre & use kre
const user = { //object bnaya
    usernaam: "Vivek",
    price: 199
}

function handleObject(anyObj){
    console.log(`useername is ${anyObj.usernaam} & price is ${anyObj.price}`);
    
}
// handleObject(user) // direct objecct ko pass kar skte 
//  ya fir function ke andar object daalkr bhi kar skte . hence zaroori nhi ki pehle alag se object bnakr krna hai 
handleObject({
    usernaam: "Saam", 
    price : 890
})


//passing array in function
const myArray = [500, 600, 100, 2, 4]

function returnSecondVlaue(getArray){ // parameter me naam generic de rhe
    return getArray[1]
}
// console.log(returnSecondVlaue(myArray)); // function pass krte time jo array ki value chayhe wo pass kr rhe
//same like object hum directly function ke andar hi array bnakr pass kr skte
console.log(returnSecondVlaue([200, 600, 800 , 6 , 8]));







