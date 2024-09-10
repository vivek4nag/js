class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this.passwordA.toUpperCase()
    }

    set password(value){
        this.passwordA = value
    }

    // note that we are using passwordA & not simple password to avoid infinite recursion loop & stack overflow
    /* 
    we changed the property name bcz -
        Getter and Setter Conflict: When you define a getter and setter for a property (in this case, password), the getter and setter methods are automatically invoked whenever you try to access or assign a value to the property password. If you use this.password inside the getter or setter method (as we initially tried), every time you try to access or set this.password, the getter and setter themselves will be invoked, leading to infinite recursion.
        When the getter is called (get password()), if you try to access this.password, it will call the getter again, and this cycle will continue indefinitely, causing a stack overflow.
        Similarly, when the setter is called (set password(value)), if you set this.password = value, the setter will be triggered again, leading to the same problem.
        To avoid this, we store the actual password value in a separate property (passwordA). This prevents the getter and setter from recursively calling themselves.
    */ 

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const Vivek = new User("vivs@gmail.com", "123abc")
console.log(Vivek.password);
console.log(Vivek.email);

