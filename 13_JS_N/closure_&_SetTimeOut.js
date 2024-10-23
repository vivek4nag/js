// if we want to print 1 to 6 each after every 1 second, we can probably think of below code
// but it will print 6 only 5 times. why is this so?

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("using var");
}

// x();

// above scenario bcz The var keyword in JavaScript has function scope (not block scope like let or const), so the variable i is shared across all iterations of the loop. In other words, there's only one instance of i that is updated on each iteration. By the time the setTimeout function executes, the loop has already completed, and i will be equal to 6 (the value that causes the loop to stop).
// The setTimeout function schedules a task to be executed after a certain amount of time (in this case, i * 1000 milliseconds). When each setTimeout callback is executed, they will all log the value of i, but by the time they execute, the loop has already finished and i is 6. since setTimeout is asynchronous, all the console.log(i) statements inside the setTimeout function are executed after the loop finishes, by which time the value of i has become 6.

// for below case we are using let ==> let ensures that a new i is created for each iteration, and each setTimeout callback retains the value of i at the time of its creation.

function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("using let");
}

// y();

// we can also solve the problem using IIFE

function z() {
  for (var i = 1; i <= 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

// z();

// or we can create a function & enclose the setTimeout inside that function & call it every time with new value of i

function a() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }

    close(i);
  }
}

a();
