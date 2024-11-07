const GITHUB_API = "https://api.github.com/users/vivek4nag";
// const user = fetch(GITHUB_API)
// console.log(user);

// user.then(function(data){
//     console.log(data);

// })
/*
let p1 = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    setTimeout(() => {
        if (success) {
            resolve("data fetched successfully");
        } else {
            const err = new Error("data fetch unsuccessfull");
            reject(err);
        }
    }, 3000);
});
*/
//below is just simple then catch
/*
p1.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
*/

// below is promise chaining
/*
p1.then(function (data) {
    console.log("1st then printed & " + data);
    return 10;
})
    .then((data) => {
        console.log("2nd then printed & " + data);
        return data * 2;
    })
    .then((data) => {
        console.log("3rd then printed & " + data);
        return data * 4;
    })
    .catch((err) => {
        console.log(" last error printed" + err);
    })
    .then((data) => {
        console.log("this will be executed no matter what" + data);
    });
    */
// catch will only cater to error of all the then preset above it.
// any then present below a particular catch will be executed no matter what

// Promise APIs

let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 success");
//   }, 3000);
  setTimeout(() => reject("p1 failure"), 3000);
});

let p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p2 success"), 1000);
  setTimeout(() => reject("p2 failure"), 1000);
});

let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 success");
//   }, 2000);
setTimeout(() => reject("p3 failure"), 2000);

});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

  Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));


  Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err)
  console.log(err.errors) // this will give the array of errors
  });
