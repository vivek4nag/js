// 2 types of currying

// currting with bind

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo);

multiplyByTwo(5); // 10

let multiplyByThree = multiply.bind(null, 5);
multiplyByThree(3); // 15


// currying with closure => normal function & then arrow function

let closureMultiply = function (x) {
  return function (y) {
    return function (z) {
      console.log(x * y * z);
    };
  };
};

closureMultiply(3)(4)(5); // 60


let arrowMultiply = (x) => (y) => (z) => console.log(x * y * z);

arrowMultiply(3)(8)(2); // 48
arrowMultiply(4)(7)(2); // 56
