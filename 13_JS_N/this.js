"use strict";

// this in global space

console.log(this);
// inside browser w strict mode = undefined
// inside browser w/o strict mode = window
// inside node js = empty object

// this inside a function

function x() {
  console.log(this);
}

// x() // undefined bcz hum strict mode use kr rhe
// window.x() // window bcz calling any function as a method of an object, this always refers to calling the object regardless of mode

// this inside object

let obj = {
  a: 10,
  x: function () {
    console.log(this);
    console.log(this.a);
  },
};

// obj.x() // as the function is being called as method of the object, this will refer to the object only

// this inside arrow function
let obj1 = {
  b: 10,
  y: () => {
    console.log(this);
  },
};

// obj1.y()

//this inside nested arrow functions

let obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x()


// this inside DOM element 
// if using normal function => reference to HTMLelement
// is using arrow function => refreence to window obbject
document.getElementById("btn").addEventListener("click", function() {
    console.log(this);
})

document.getElementById("btn1").addEventListener("click", () => {
    console.log(this);
})
