const user = {
    username : "Hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`); // current contezt ko use krne ke liye this keyword ka use krna hai 
        console.log(this); // saare current variable jo object me hai wo print kr dega
        
        
    }
}

user.welcomeMessage() // Hitesh, welcome to website - default jo naam hai wohi 
user.username = "Sam" // we changed the context matlab basically values
user.welcomeMessage()


console.log(this); //abhi globally koi object hi nhi hai isliye ek empty object print hoga 
// lekin agr browser ki terminal me aise this ko print krenge to op me window object return hoga kyuki wo sabse zyda global object hai 
// When this is used in the global scope (outside of any function), it refers to the global object. In a browser environment, this is the window object.

/*
//ye wala concept is very imp
//When this is used inside a regular function (not an arrow function), its value depends on how the function is called:
// 1 If the function is called as a method of an object, this refers to the object.
// 2 If the function is called as a standalone function (not as a method of an object), this refers to the global object (window in a browser) in non-strict mode. In strict mode ("use strict";), this is undefined.
function chai(){
    let userid = "viv"
    console.log(this.userid); // undefined aayga bcz The userid variable is declared with let inside the function chai(). This variable is local to the function and is not a property of the global object.

    userid2 = "abhi agr this use krenge to op aayga bcz userid2 is part of global obj"
    console.log(this.userid2);
    
    
}
chai()
*/

//arraow function
const chai = () => {
    let username = "vivs"
    console.log(this.username);
}

// chai() // isme bhi op undefined aayga

//arrow function syntax () => {}
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

//another way of declaring arrow function - implicit return - isme return keyword use nhi krna - so curly braces ke andar likha to return keyword likhna pdega
const addition = (n1, n2) => n1 + n2
console.log(addition(5, 9));
//another way - 
const addition1 = (n1, n2) => ( n1 + n2 ) // we can use normal parenthesis, tab curly brackets use nhi krna - react me bht kaam aayga
console.log(addition1(5, 9));
//ye ( ) while returning will be usefull is future bcz kabhi object return krna ho to hum ( ) ke andar object return krenge . bcz object are declared by { } braces . so usko ( ) ke andar wrap krke return krenge 
const returnObj = () => ({name : "vivek"})
console.log(returnObj());


