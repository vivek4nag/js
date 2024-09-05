// call apply bind generally ek sath pdhte hai . yahn sirf call kiya hai.. but properly smjh nhi aaya 

function setUsername(username){
    
    //complex DB call & calculation ho rha maano yahn
    this.username = username
}

function createuser(username, email, password){
    setUsername.call(this ,username)
    this.email = email
    this.password = password
}

const viv = new createuser("vivek", "vivs@gmail.com", "1234")
console.log(viv);
