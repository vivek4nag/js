b()  // The function b() is fully hoisted, so you can call it before it's defined in the code.
console.log(a); // This throws a ReferenceError: Cannot access 'a' before initialization.Although the variable a is hoisted, it is not initialized until the line const a = 'hello world'; is reached.  Until that point, a is in the Temporal Dead Zone (TDZ), which means you can't access it, and attempting to do so throws a ReferenceError.


var a = 'hello world'

function b(){
    console.log("called b");
    
}

// Hoisting is a JavaScript mechanism where variable and function declarations are moved (or "hoisted") to the top of their containing scope (either the global scope or a function scope) before the code execution. However, only the declarations are hoisted, not the initializations or assignments.

// Function declarations (like b()) are fully hoisted to the top of their scope. This means the entire function b() is hoisted, so you can call b() before it appears in the code.

// Variables declared with const or let are also hoisted but behave differently compared to var.
// When a variable is declared with const or let, it is hoisted but placed in a temporal dead zone (TDZ) until its assignment. The TDZ is the time between the hoisting and the actual declaration/initialization. You cannot access the variable until the execution reaches the line where the variable is initialized.
// Unlike var, accessing a const or let variable before its initialization results in a ReferenceError. & var gives undefined error