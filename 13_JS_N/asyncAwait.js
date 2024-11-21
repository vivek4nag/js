// async function always returns a promise

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise reolved");
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise reolved 2");
  }, 3000);
});

console.log(p2);

// async function getData() {
//   // return "hello"; // we are returning string hello yet it will be wrapped inside a promise & will be returend

//   return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));

// now we are comparing how we used to resolve promise before async await & after

// before async await

function getData() {
  // JS engine will not wait for promise to resolve, the promise will be sent over to web API & it will move ahead to print the log statement
  p.then((res) => console.log(res));
  console.log("printing from getData function");
}

getData();

//same above thing using asyn await & note that await only used inside async function & await is written in front of a promise & it resolve the promise

async function handlePromise() {
  console.log("printing inside async but before await triggers");

  // JS engine will wait here for promise to resolve & things below await will not be executed. It will only go to next line once promise is resolvd
  const val = await p;
  console.log(`printing from async function after p is resolved `);
  console.log(val + " async await");

  const val2 = await p2;
  console.log(`2nd printing from async function after p is resolved again `);
  console.log(val2 + " async await again ");
}

handlePromise();
