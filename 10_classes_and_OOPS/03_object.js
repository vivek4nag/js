function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2 // In JS, functions are objects, so we can add properties to them just like we would for any object. So we are adding a property power to the multiplyBy5 function object.
console.log(multiplyBy5(5)); // op 25 aayga simple
console.log(multiplyBy5.power); // yahn op 2 aayga...note that we are using dot operator like we use in object to access the property. 


console.log(multiplyBy5.prototype); // yahn op aayga {} .. Every function in JS has a prototype property. This property is an object that is used when the function is used as a constructor function (i.e., when you create objects using the new keyword). By default, the prototype property is an empty object {}. In this case, since multiplyBy5 is just a regular function (not used as a constructor), its prototype remains an empty object. If this function were used as a constructor with new, the objects created would inherit properties and methods from multiplyBy5.prototype.

function createUser(username, score){
    this.username = username // this keyword refers to the new object that will be created when the function is called with new
    this.score = score
}

// The prototype property allows us to define methods and properties that will be shared by all instances created by the constructor function.
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

/*

When createUser is called with new, two things happen:
1. A new empty object is created, and this inside the constructor refers to that new object.
2. The properties username and score are assigned to that new object.

if we dont use new keyword then - the this keyword inside createUser does not refer to a new object. Instead, this will refer to the global object (in non-strict mode) or undefined (in strict mode).This will result in unexpected behavior. It will not create a new instance or attach username and score to a new object. Instead, username and score may be assigned to the global object.

*/





/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

