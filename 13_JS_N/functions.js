
// a();
// b();

// Function Statement aka Function Declaration  ==> can be hoisted
function a(){
    console.log("this is function statement");
    
}

//Function Expression ==> can't be hoisted as var b in memory creation phase is treated like any other variables hence when JS engine execute the function is is undefined & throws an error.
// In other words During the hoisting phase, JavaScript moves the variable declaration var b; to the top, but the function is not assigned to b yet. So, when you try to call b() before the assignment happens, b is undefined, which leads to the error TypeError: b is not a function.
var b = function () {
    console.log("function Expression called");
    
}



// Anonymous Function ==> below code will give error bcz as per ES6 specs a function statements requires a function name. but anonymous function are used when function is used as value. as we have used above(function expression), or as callback function, as IIFE, arrow function (anonymous by default)
// function (){
// }



// named function expression like anonymous function expression, but just given name. This name can be used within the function body for recursion or referencing the function itself, but it is not accessible outside of the function.
var c = function x(){
    console.log("named function expression");
    
}
c()
// x() // error --> x is not defined


/*first class function or first class citizens ==> concept where functions are treated as values. This means that functions can be:
1. Assigned to variables.
2. Passed as arguments to other functions.
3. Returned from other functions as values. */

