// this is old syntax of getter & setter .pehle classes & constructor nhi hoti thi so hum aise function se krte the kaam. infact yahn direct getter & setter nhi hai. as function behaves both as normal functionn & object hence we defined our own property named as getter & setter

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const Viv = new User("viv@gmail.com", "abc65hffg") 
console.log(Viv.email);
console.log(Viv.password);
