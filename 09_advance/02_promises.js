// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more manageable way to handle asynchronous operations compared to traditional callback functions, which can lead to complex and hard-to-read code.

/* States of a Promise =>
    1. Pending: The initial state, neither fulfilled nor rejected.
    2. Fulfilled: The operation completed successfully.
    3. Rejected: The operation failed.

   Promise Methods:
    1. then(): Invoked when the promise is fulfilled (successful). It takes up to two arguments: a callback function for the success case and optionally a callback function for the failure case.
    2. catch(): Invoked when the promise is rejected (failed). It takes one argument: a callback function for the failure case.
    3. finally(): Invoked when the promise is settled (either fulfilled or rejected). It is often used to perform some cleanup or final operations regardless of the promise outcome. 

*/


//neeche wale me we created a new Promise object and assign it to the variable promiseOne. The Promise constructor takes a function as an argument. This function is often referred to as the "executor function" and has two parameters: resolve and reject. Inside the executor function, you perform some asynchronous task -- here we did async task of settimeout to simulate delay of 2 second. 2 sec baad wo consoole log ho jaayga 
// after this resolve() is called to change the state of the promise from "pending" to "fulfilled." This indicates that the asynchronous task was successfully completed. The resolve() function inside the executor marks the promise as "fulfilled," and this triggers any .then() callbacks attached to the promise.
const promiseOne = new Promise(function(resolve, reject) {
    //Do an Async task like DB calls, cryptography, netowrk
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // is function se promise & .then wala function connect hoga & abhi setitmeout wala function over hone ke baad nceeche wala function bhi chlega 
    }, 2000)
})
// Consuming the Promise with .then(): .then() is a method used to handle a fulfilled promise. When promiseOne is fulfilled (i.e., when resolve() is called after the 2-second delay), the callback function passed to .then() is executed.
// console.log("promise consumed"); logs a message to the console, indicating that the promise has been successfully consumed.
promiseOne.then(function(){
    console.log("promise consumed");
    
}) 


// 2nd promise => upar humne 2 part me kiya hai.. neeche humne same kaam 1 hi part me ek sath kiya hai 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})




// ab 3rd promise 

const promiesThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "vivs", email:"abc@example.com"})
    }, 1000)
})

promiesThree.then(function(user){ // resolve ke andar jo parameter pass krenge wo yahn function ke andr mil jaayga. jo object resolve ke andar se aaya hai  usko user variable me humne .then function me recievve kiya. ab user ko console log krenge to pura object print ho jaayga
    console.log(user);

})



// ab 4th promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // agr maanlo koi error aata hai
        if(!error){ //if koi erro rnhi hai to simply resolve
            resolve({username:"vivek", password: "1234"})
        }else{ // warna error dikha do kya hai
            reject('ERROR : Something went wrong')
        }
    }, 2000)
})
/*const username =  promiseFour.then((user) =>{
    console.log(user);
    return user.username
})
console.log(username);*/ //aise data nhi nikalna.. error aayga

// hencce we will use chaining to pehla wala jo return krega wo niche wale function me jaayga
promiseFour.then((user) =>{
    console.log(user);
    return user.username // this return the username to the next then in the chain
    
}).then((myUsername) => { // error false hoga to username print ho jaayga
    console.log(myUsername);
    
}).catch(function(error){ // The .catch() method is used to handle errors or rejections. It is called if the promise is rejected (i.e., reject is called). If there is an error or if reject is called, the catch block is executed.
    console.log(error);

}).finally(() => console.log("The promise is either resolved or rejected") // It is used to execute code regardless of whether a promise is fulfilled or rejected.
)

/*notes on then, catch & finally
    .then() is used to handle the resolved value of a promise. It is called when the promise is successfully fulfilled.
It can take up to two arguments: a callback for when the promise is fulfilled (onFulfilled) and an optional callback for when the promise is rejected (onRejected), although it's more common to handle rejections with .catch().
The .then() method can return a value or another promise. If it returns a value, that value is passed to the next .then() in the chain. If it returns a promise, the next .then() waits for that promise to resolve.

    .catch() is used to handle errors or rejections. It is called when the promise is rejected, or an error occurs in any of the previous .then() handlers.
If any of the .then() handlers throws an error, or if the promise is explicitly rejected, .catch() is triggered.

    The .finally() method allows you to run some code after a promise has either been resolved (fulfilled) or rejected. This is useful for cleanup or final operations that need to be performed regardless of the outcome of the promise.
The .finally() block does not receive any arguments, meaning it doesn't have access to the resolved value or the rejected reason of the promise.
Unlike .then() or .catch(), the return value of .finally() is not passed down the promise chain. Instead, the result of the last settled promise (resolved or rejected value) is passed down.
It runs once the promise settles (either resolves or rejects).
*/





// promise 5
// we can also use  an async function with await to consume the promises istead of then & catch 
// async/await: Allows you to write asynchronous code that looks and behaves like synchronous code. The await keyword pauses the function execution until the promise is settled (either resolved or rejected).

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){ 
            resolve({username:"Tim Cook", password: "1234"})
        }else{
            reject('ERROR : Cook is cooking')
        }
    }, 2000)
});

async function consumePromiseFive() { // async function khud se error handle nhi kar skte
    try {
        const response =  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive() // This  function is called to execute the promise handling logic.

/* 
    The async keyword allows the function to use await to handle asynchronous operations.
    Inside the function, a try...catch block is used to handle potential errors:
    await promiseFive waits for the promise to settle (either resolve or reject).
    If the promise is fulfilled (i.e., resolve is called), the resolved value is assigned to response.
    If the promise is rejected (i.e., reject is called), control is passed to the catch block.
    If an error occurs (i.e., if reject is called), the error is logged to the console.
*/



// abhi tk jo pdha uska use kahn & kaise hoga-- neeche dekho & next lecture me pata kgega

async function getAllUsers() {
    try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        
        const data = await response.json() // ye json me convert hone me time lgta hai to ise bhi await me convert krna pdega
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
        
    }
    
}
getAllUsers()


//writting the same thing in then catch function
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)
.finally(() => console.log("sab ho gya ")
) // ye bs man hua to laga diya
