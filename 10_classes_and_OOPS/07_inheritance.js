class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

// extends means the Teacher class will inherit the features of parent class here is User Class
class Teacher extends User{ 
    constructor(username, email, password){
        super(username) // using super keyword we can directly access the properties of parent class 
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`A new Course was added by ${this.usernamame}`); // when we are referring to username the super keyword will automatically get current username from the User calss bcz Teacher class is inheriting from it
    }
}

const user1 = new Teacher("vivs", "viv@gmail.com", 1234)
user1.addCourse()

const user2 = new User("Bill Gates") // we made object using User class
user2.logMe()  // Useer class has access to logMe function so print ho jaayg

// user2.addCourse() // but addCourse is defined in Teacher class which is child of User class. & User class has no access to function of child class hence it will nt run

console.log(user1 === user2); // op false aayga

// The instanceof operator in JavaScript is used to check whether an object is an instance of a particular constructor function or class.
// object instanceof constructor

console.log(user1 instanceof Teacher); // true bcz yes indeed user1 is instance of Teacher

console.log(user1 instanceof User); // true bcz user1 is instance of Teacher & teacher inherits all property of User so user1 also is object of User classs 

