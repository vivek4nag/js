// so far we used literal to define object
// const tinderUser = {} // empty object 

// can also be defined
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: { // nested objects
        userFullName: {
            firstName : "vivs",
            lastName : "nag"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);


// Object.assign() used to copy the values of all enumerable own properties from one or more source objects to a target object. This method is useful for cloning objects or merging multiple objects into a single object.
// Object.assign(target, ...sources)
const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }
const obj3 = {5: "a", 6: "b" }
//const obj3 = {obj1 , obj2} // array me jaisa hua tha waisa prolem hoga.. dono obj as it is pura merge ho jayga 
//const obj4 =  Object.assign({}, obj1, obj2, obj3) // pehla { } is just the target object & then usme obj1 2 3 ko merge kr rhe agr {} nhi denge to saari values obj 1 me jaakr add ho rhi hogi
//console.log(obj4);

//another way to merge object is spread method
const obj4 = {...obj1, ...obj2, ...obj3} // yahn extra {} for target object daalne ki need nhi 
//console.log(obj4);


// sometimes objects will be stored inside an array
let users = [
    {
        id: 1, email: "hello @gmail.com"
    }, 
    {
        id: 2, email: "bello @gmail.com"
    },
    {
        id: 3, email: "cello @gmail.com"
    }
]
users[1].email // to access email of 1st object inside array 

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] gives all the keys in an array 
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ] same values bhi array ke form me aajayga 
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] - return every key value as an array 

console.log(tinderUser.hasOwnProperty('name')); // to know whether a particular property is presrnt in the object or not
console.log(tinderUser.hasOwnProperty('naaam')); // naam is not a property hence op false


// **************** Object de-structure ********************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Norindar Mudi"
}

// ab suppose hume courseInstructor ko baar baar use krna hai to we can destructure it using following syntax - 
const {courseInstructor : instructor} = course // course object se courseinstructir ko deconstruct kr do instructor naam se
console.log(instructor); // now we can simply call instructor
//we will use above deconstruct wala thing in react n stuff







