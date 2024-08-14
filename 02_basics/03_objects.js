// object 2 tarike se define kar skte - literal tarike se ya constructor se
// singleton (smjhna hai acche se) - jab bhi literal se declare krte hai object to singleton nhi banta hai

//using constructor
// Object.create

// object literals
const mySym = Symbol("key1") // symbol ko key me kaise use krna hai uske liye ye example
const JsUser = { // declared using {} & inside key-value pairs are present
    name: "vivek",
    "full name": "vivek Nag",  // this value can not be accessed using dot operator
    [mySym]: "myKey1", // symbol ko as key use krna hai to use in square bracket & access krna hai to same square bracket use krkr krna hai
    age: 15,
    location: "delhi",
    email: "vivs@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]); // behind the screen keys ko uske datatype ke according rakha jaata so email is string hence we need to call using " "
console.log(JsUser["full name"]); // ye dot operator se print ho hi nhi skta
console.log(JsUser[mySym]); // accessing symbol key 

//to override values
JsUser.email = "vivek@chatgpt.com"
console.log(JsUser.email);

/*
if u want ki koi value kabhi change naa ho to use freeze.it becomes immutable, you can no longer add, remove, or modify its properties
Object.freeze(JsUser)
JsUser.email = "vivek@microsoft.com"
console.log(JsUser); //kuch change nhi hoga bcz freeze kr diya hai
console.log(Object.isFrozen(JsUser)); // boolean return karta hai
*/
/*
note - Object.freeze() only makes the top-level properties immutable. If the object contains nested objects, those nested objects will remain mutable unless they are explicitly frozen.

const person = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};

Object.freeze(person);

person.address.city = "Los Angeles"; // This will work because the `address` object is not frozen

console.log(person.address.city); // "Los Angeles"

*/

// adding a function in object
JsUser.greeting = function(){
    console.log("Namaste");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`); // pehle (` `) use krke string intepolation kiya then this keyword se current object ke name wale instnce ko bulaya
    
}
console.log(JsUser.greeting); // [Function (anonymous)] - function execute nhi hua hai bss uska reference return hua hai
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



