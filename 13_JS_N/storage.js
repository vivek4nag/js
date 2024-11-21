// sbse important ==> key value pair me data store hota hai & BOTH KEY & VALUE MUST BE IN STRING

localStorage.setItem("01", "hello")
let user = {
    name : "vivs",
    surname : "nagdevta",
    marks : 13,
    class : "4th"
}

localStorage.setItem("userdetails", JSON.stringify(user))
jsonData = localStorage.getItem("userdetails")
console.log(typeof jsonData);
console.log( typeof JSON.parse(jsonData));

