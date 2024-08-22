 // if statement

//  == converts the data type & check so it is a loose check
if(2 == "2") console.log("executed");
//  === is a strict check it checks value as well as data type
if(2 === "2") {
    console.log("executed");
}else {
    console.log("not executed");
}

//scope in these conditionals

let score = 200

if(score>100){
    let power = "fly"
    console.log(`user power ${power}`);
}
// console.log(`user power ${power}`); => this will not work bcz scope of power variable is only within that if block. But Var keyword use krenge to global scope ho jayga .. jo ki desirable nhi hai

// else if , else same as java 

// ye and operator same as java stuff
const userLoggedIn = true
const debibCard = true

if(userLoggedIn && debibCard){
    console.log("allowed to purchase");
    
}


// Nuliish Coalescing Operator (??) : null  undefined