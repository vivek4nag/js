// 11 number file me humne class ke andar constructor se object bnaya & the get sett access kiya
// 12 wale me hmne function bnaya & uske andar khud se get & set naamm ki property bnayi & same kaam kiya
// yahn hum direct object bna rhe & same kaam krenge


// underscore use krte hi hum basically private property define kr rhe hai 
const User = {
    _email: 'viv@gmail.com',
    _password: "ab78c",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// we will use factory function to create object here
const viv = Object.create(User) // creates an object (viv) that inherits from User. The properties and methods in User, including the getter and setter for email, are available to viv through prototype inheritance. When viv.email is accessed, it checks if viv has its own email property. Since it doesn’t, it looks up the prototype chain and finds the getter for email in User.
console.log(viv.email);
