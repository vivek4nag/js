// immediately Invoked Function Expression (IIFE) - is a function that is executed right after it is defined. This pattern is often used to create a local scope that protects variables and functions from polluting the global scope, helping to avoid potential name collisions and keeping the code modular and isolated.

//An IIFE is typically written by wrapping a function expression in parentheses and then immediately invoking it with another pair of parentheses.
(function chai(){ // ye ek named IIFE hai 
    console.log("DB Connected");
})();

// so basically 2 baar ( ) use krna hai .. pehle ( ) me function define & uske turant baad jo ( ) aayga us se execute ho jayga  
// main mudda hai ki global scope ko pollution se bachane ke liye hum aisa karte

// & remember ki aise IIFE wale fucntion ke end me ; lgana hai warna end nhi hoga wo function & neeche ke dusre function nhi chalnege


( (place) => { // ye simple IFFE hai bcz iska koi naam nhi hai
    console.log(`db connected to ${place}`);
    
}) ("pilanji")

