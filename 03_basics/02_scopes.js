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


//nested scope
function one(){
    const username = "Vivek"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website); // ReferenceError: website is not defined. scope of website is only within the function two & hence can't be accesssed outisde

    two() // jab ye execute hoga to username print ho jayga i.e. function cal access bahar ka variable
}
one()


//similar nested scope in if else
if(true){
    const username = "Vivek"
    if(username === "Vivek"){
        const website = " Youtube"
        console.log(username + website);
        
    }
    // console.log(website); // ReferenceError: website is not defined bcz website is defined inside the nested if block & can't be accesses outside
    
}
// console.log(username); // similarly username can't be accesses bcz it is defined inside if block & it's scope is only till that only



//  ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++

function addone(num){ // ye ek simple function hai 
    return num + 1
}
addone(5)

//niche wale ko kabhi kabhi expression bulate hai.. it is like variable. in JS variable can hold anything
const addTwo = function(num){
    return num + 2
}
addTwo(5)




