// object literla --> literaaly ek object bnaya.... bs wohi hai
const user = {
    username : "nagdevta",
    loginCount : 5,
    signedIn: true,

    getUserDetails: function(){
        console.log("got userdetail from database");
        console.log(`Username: ${this.username}`); // this use nhi krenge to error aayaga bcz JS ko pta nhi ki ye username kiske context me function ke andar lene hai. So we have to specify to eh execution context by this keyword that we are specifying to the current object

        console.log(this);// pura current context i.e pura current object print ho jayga
        
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

// humne object ke andar this ko print karaya to wo object print ho gya bcz current execution context wohi hai. But agr global execution context me i.e. yahn bahar this ko print krayenge to {} aaya op pr
console.log(this);
// but browser me ye kroge to woha hazaro API access hai to woha window object milega jo ki global object hai 


/* jo new keyword use krte hai usi ko constructor function bolte hai 
const promiseOne = new Promise()
const date = new Date()
*/


function User(username, loginCount, signedIn){
    this.username = username; // this wala variable hai & right wala jo value hum pass kr rhe
    this.loginCount = loginCount;
    this.signedIn = signedIn

    return this // if we want we can return this i.e this whole function & all these values will be acceseble to him. ye return this implicitly defined hai.. naa bhi likhe to chalega
}

const userOne = new User("Vivek", 56, false)
const userTwo = new User("Modiji", 69, true)
console.log(userOne);
// new keyword use krte hi ek empty object create hota hai jise instance bolte hai. ab is new keyowrd ke karan constructor function call hota hai . iske andar hum saare arguments pass krte hai.
// then this keyword helps to inject the arguments in the instance created 

// read about instanceof from google 