const accountId = 14453 //it is a constant hence can't be changed

/*in JS we can declare variables in 2 ways - let or var. but var use nhi krte bcz js var ka scope(jo curly braces hai {} yehi scope hai) nhi smjh paata tha - i.e issue in block scope & functional scope */
let accountEmail = "vivek@gmail.com"
var accountPassword = "12345"

//bina koi variable declare kre bhi hum kuch store kr skte as shown below.. but not good practice
accountCity = "Jaipur"

//agr hum koi value assign nhi krte to wo undefined hogi. note - semicolon use kro na kro no dikkat
let accountState;

// accountId = 2  // this is not allowed bcz it is constatnt already declared
accountEmail = "naya@gmail.com"
accountPassword = "21221"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

