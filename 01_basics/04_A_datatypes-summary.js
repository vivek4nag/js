// primitive datatypes - call by value
// 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol - are unique and immutable values that can be used as keys for object properties, ensuring that there are no name collisions, even if the property names are the same.
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId); // false bcz both have stored unique value

 //BigInt
 const bigNumber = 56454245215554622455n // last me n laga do bss
 console.log(bigNumber);

// Non Primitive -  Reference Type
// Array, Objects, Functions

//arrays
const heros = ["Shaktiman", "rocketman", "nagdevta"]
console.log(heros);

//objects - defined inside {} & write in key - value pair
let myObj = {
    name : "vivek",
    age : 22,
    isEmployed: true,
}

//functions - 
const myFunction = function(){
    console.log("hello world");
    
}

// typeof function is used t find the type of the data

console.log(typeof bigNumber);
console.log(typeof id); // Symbol 

console.log(typeof myFunction); // op function
console.log(typeof heros); // op object
// for all non primitive data - type is object 
//function ka type function hi aata hai.. but actually me wo object function hai 


// ************************************************************

// stack(Primitive), Heap(Non-Primitive)

let myName = "vivs"
let anotherName = myName
anotherName = "modiji"
console.log(myName);
console.log(anotherName);
//upar wale primitive hai.. they are stored in stack. hence any change to them is done to the copy of that particular data

//niche wala is an object i.e. non primitivev data hence stored in heaps. so any change in this is done directly in this data only
let userOne = {
    email : "user@google.com",
    upi : "user@ybl" 
}

let userTwo = userOne //here both user one & two will point to the object created in heap & usertwo will not get access to a copy of userOne unlike primitive data in stack memory

//hence any change in usetrtwo will be reflected in userOne also
userTwo.email = "nayaemail@gmail.com"
console.log(userOne.email);
console.log(userTwo.email); //both will give same o/p bcz both are pointing/refering to same obejct



