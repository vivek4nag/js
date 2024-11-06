const GITHUB_API = "https://api.github.com/users/vivek4nag";
// const user = fetch(GITHUB_API)
// console.log(user);

// user.then(function(data){
//     console.log(data);

// })

let p1 = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;

  setTimeout(() => {
    if (success) {
      resolve("data fetched successfully");
    } else {
        const err = new Error("data fetch unsuccessfull")
      reject(err);
    }
  }, 2000);
});

p1.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

