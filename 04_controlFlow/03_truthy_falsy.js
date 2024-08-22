// hum pehle hi maan lete ki value truth hai even before comparision to wo truthy value hai 
// Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN.
// Truthy Values: Everything else that is not falsy, including non-zero numbers, non-empty strings, objects, and arrays.
// some truthy eg - "0", "false", " ", [](empty array). {}(empty obj), function(){} -> empty function bhi truthy hai 

const userEmail = "vivi@gmail.com"
//we are not checking any boolean.. just assuming ki haan string me value hai 
if (userEmail) {
    console.log("got email");
}else{
    console.log("email not present");
    

}

//agr empty string hai to falsy value
const userEmail1 = ""
//we are not checking any boolean.. just assuming ki haan string me value hai 
if (userEmail1) {
    console.log("got email");
}else{
    console.log("email not present");
    
}

//obj empty hai ki nhi check krne ke liye - Object.keys(obj name) is syntax se object ki keys ki array bnkr aajaygi & then usme hum length function se check kr lenge ki size 0 hai ki nhi 
const emptyObj = {} 
if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty");
    
}

// ye neeche wale teeno cheez bs patahona chyhe.. abhi use nhi hai 
console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true


// Nuliish Coalescing Operator (??) : null  undefined
// it returns the right-hand side operand when the left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand. This operator is useful for providing default values in cases where a variable might be null or undefined but not other falsy values like 0, false, or "".
let val1;
//val1 = 5 ?? 10 // op 5 (left side wala print hua )
// val1 = null ?? 10 // op 10 (left me null hai so right print hua )
// val1 = undefined ?? 15 // op 15 bcz left me undefined hai so right wala print hoga 
val1 = null ?? 10 ?? 20 // op 10-  pehla jo 10 mila wohi print kar dega

console.log(val1);


//ternary operator upar wala null colaisenence se alag hai 

const price = 100
price >= 100 ? console.log("mehenga chai") : console.log("sasti chai ");
;





