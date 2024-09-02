// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more manageable way to handle asynchronous operations compared to traditional callback functions, which can lead to complex and hard-to-read code.

const promiseOne = new Promise(function(resolve, reject) {
    //Do an Async task -->
    // DB calls, cryptography, netowrk
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // is function se promise & .then wala function connect hoga & abhi setitmeout wala function over hone ke baad nceeche wala function bhi chlega 
        
    }, 2000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
}) 

//upar humne 2 part me kiya hai.. neeche humne same kaam 1 hi part me ek sath kiya hai 

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

promiesThree.then(function(user){ // resolve ke andar jo parameter pass krenge wo yahn function ke andr mil jaayga
    console.log(user);

})


// ab 4th promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // agr maanlo koi error aata hai
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
    return user.username
    
}).then((myUsername) => { // error false hoga to username print ho jaayga
    console.log(myUsername);
    
}).catch(function(error){
    console.log(error);
    
})
