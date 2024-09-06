// pehle humne class bnakr kuch cheezen implement kiya .. fir same cheez ko function bnake bhi implement kiya. the working of class is same as function

/*
class user{
    constructor(usernamame, email, password){
        this.usernamame = usernamame;
        this.email = email;
        this.password = password
    }

    // suppose we made a method to encrypt password 
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return`${this.usernamame.toUpperCase()}`
    }
}

const user1 = new user("vivek", "vivs@gmail.com", "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());
*/

// behind the scene kese kaam ho rha

function User (username, email, password){
    this.usernamame= username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.usernamame.toUpperCase()}`
}

const user2 = new User("Musk", "musk@hotmail.com", 1234)
console.log(user2.encryptPassword());
console.log(user2.changeUsername());


