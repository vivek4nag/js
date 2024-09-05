let myName = "Vivek     "

console.log(myName.length); // abhi length aayga 10 bcz string ki lsat me empty spaces bhi hai
// but we want true length & we want ki hum ek aisa function likhe jo kisi bhi string me access kar ske... 
// ekdum neeche dekho


// before that lets deep dive into prototype

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

//upar humne ek object & ek array declare kiya hai.. since JS me sab kuch object hi hai .. so agr hum Object datatype me hi ek prototype bna de which can be accessed universally by all other datatype -->

Object.prototype.vivek = function(){
    console.log(`Vivs is present every where in all objects bcz mai Object me bna hun `);
}

Array.prototype.heyVivek = function(){
    console.log(`I am only present in Arrays bcz mai Array me bna hun & not in object`);
    
}

heroPower.vivek() // heropower ek object humne bnaya hai & since vivek prototype humne Object datatype ke liye bnaya hai to heropower object ko bhi uska access hoga & presernt everywhere wala print ho jayga 
// heroPower.heyVivek() //  error aaajayga TypeError: heroPower.heyVivek is not a function. Bcz object ko ye heyvivek wala prototype ka access hi nhi hai 


myHeros.vivek() // myheros ek array hai but usme bhi ye vivek ka access hoga bcz vivek directly Object me bna hai 
myHeros.heyVivek() //  yahn print ho jayga bcz array ko access hai  


// Inheritence

// __proto__ ka use thoda purana hai ==> The __proto__ property is a reference that points to an object's prototype. It allows one object to inherit properties and methods from another object. 
// __proto__ is used to establish a prototype chain where one object can inherit properties and methods from another.
const user = {
    name: "Bholu",
    email:"Bholu@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailbale: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport // Here, TASupport inherits from teachingSupport.This means if you try to access a property on TASupport that doesn't exist on it directly, JS will look for that property in teachingSupport through the __proto__ reference.
}

console.log(TASupport.isAvailbale);  // op false bcz Even though TASupport doesn't have an isAvailbale property, JavaScript finds it in teachingSupport due to the prototype chain.

Teacher.__proto__ = user // Teacher inherits from the user object. This means if you access a property on Teacher that doesn't exist on it directly, JS will look for that property in user.
console.log(Teacher.name);  // op "Bholu"
console.log(Teacher.email);  //  op "Bholu@gmail.com"
// Even though Teacher doesn’t have name and email properties directly, JavaScript looks for them in user through the prototype chain.

//Inheritance allows you to define common properties and methods in one object (like user or teachingSupport) and share them across multiple objects (Teacher or TASupport) without duplication.



// modern syntax
// Object.setPrototypeOf() is used to explicitly set the prototype (i.e., __proto__) of one object to another. It changes the prototype of the given object to a different object.
// syntax Object.setPrototypeOf(jis obj ka prototype set krna hai , The new prototype)
Object.setPrototypeOf(teachingSupport, Teacher) //it sets the prototype of teachingSupport to Teacher. This means that now, if you try to access a property on teachingSupport that doesn’t exist on teachingSupport, JavaScript will look for it in Teacher.




// ekdum upar wala trueLength

let naam = "ollalala      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
// since humne String datatype ki hi prototype me ek naya function likha hai  so it will be accecible to any String datatype as shown below
naam.trueLength()
myName.trueLength()
"Hello".trueLength()
"Modiji".trueLength()

