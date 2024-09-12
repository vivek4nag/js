//  The scope chain is the mechanism by which JavaScript looks for variables, starting from the innermost function (where the variable is called) and moving outward to the enclosing scopes, and eventually the global scope.  

function b(){
    console.log(myVar);
    
}

function a(){
    var myVar = 2
    b();
}

var myVar = 1
a();


// explaination of code running - 
//      Global Execution Context: When the code starts executing, the global execution context is created. The variable myVar is declared and initialized with the value 1 in the global scope.

//      Function a() Execution: The function a() is called, creating a new execution context for a(). Inside a(), the local variable myVar is declared and initialized with the value 2. This variable is local to a() and will not be accessible outside of the function. Then, function b() is called from within a(), which creates a new execution context for b().

//      Function b() Execution and Scope Chain: When b() is called, JavaScript looks for the variable myVar inside the function b() itself, but b() does not have a local myVar variable. Next, JavaScript looks for myVar in the scope where b() was defined, not where b() is called from. In this case, b() is defined in the global scope. Since b() does not find myVar in its own scope or in its parent (lexical) scope, it looks in the global scope, where myVar is found with the value 1. b() outputs 1 because it finds myVar in the global scope.

//      In this example, b() does not have access to the local variable myVar defined inside a() because b() is not lexically within a(). Instead, b() was defined in the global scope, so it searches for myVar in the global context, where myVar = 1 exists.