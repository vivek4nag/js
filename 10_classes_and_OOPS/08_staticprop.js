class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //  the static keyword is used to define methods or properties that belong to the class itself rather than to instances of the class. This means that static methods or properties are not accessible on instances of the class, but are called directly on the class itself
    static createId(){
        return `123`
    }
}

const vivek = new user("vivek")
// console.log(vivek.createId()); // error aayga bcz Static methods are called directly on the class, not on an object instance.

console.log(vivek.createId);


class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const modi = new Teacher("Modi", "Domi@gmial.com")
modi.logMe() // parent se inherit hokr print ho jayga normally

