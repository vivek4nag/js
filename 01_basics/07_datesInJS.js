// Dates
let myDate = new Date()
/*console.log(typeof myDate); // object   

console.log(myDate); // op will be not legible 2024-08-11T11:06:42.355Z
// to make it legible
console.log(myDate.toString()); // Sun Aug 11 2024 16:36:42 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Aug 11 2024
console.log(myDate.toTimeString()); // 16:41:15 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 8/11/2024, 4:38:09 PM
console.log(myDate.toLocaleDateString());// 8/11/2024
console.log(myDate.toLocaleTimeString()); // 4:40:20 PM
console.log(myDate.toISOString()); // 2024-08-11T11:13:50.868Z
console.log(myDate.toJSON()); // 2024-08-11T11:14:32.067Z
console.log(myDate.toUTCString()); // Sun, 11 Aug 2024 11:15:35 GMT 
*/

/*
let date1 = new Date(2024, 0, 24)
console.log(date1.toDateString()); // Wed Jan 24 2024 => hence month in JS starts from 0 january = 0 & dec = 11

// following ways also date can be declared
let date2 = new Date(2024, 0, 12, 5, 3) // 1/12/2024, 5:03:00 AM
console.log(date2.toLocaleString());

let date3 = new Date("2024-01-15") // date can be delcared in this way also
console.log(date3.toLocaleString());

//to get any particular timestamp
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1723375642376 - this is the milisecond value since 1st jan 1970 - & taking out time from this is difficult
// similarly
console.log(date3.getTime()); // 1705276800000 - also give seconds output

// to convert this milisec to second
console.log(Math.floor(Date.now()/1000));
*/

// some more concepts
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 7 = bcz 0 indexed hence august is 7
console.log(newDate.getDay()) //  0 for sunday

//ctrl + space dabane se saari property dikh jaygi 
console.log(newDate.toLocaleString('default', {
    year: "numeric", 
    weekday: "long",
    month: 'long'
}));

//aur better tarike se likhna ho toh
const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleString('en-IN', options));



















