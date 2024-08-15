// scope bascially koi variable ek programme ke kis part se accessible ho skta hai 
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // it will not print bcz let ka scope is within that { } only
//console.log(b);  //same b ka bhi scope utna hi hai
console.log(c); // ye print ho jayga 

//now block scope & global scope

let x = 300 // yahn x is in global scope
if (true){
    let x = 10
    const y = 400
    console.log("inner value: ", x); // yahn x is in block scope
    
}
console.log(x);


