// for of loops - used to iterate over the values of iterable objects such as arrays, strings, maps, sets,
const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
    
}

//this loop will work for strings also
const str = "hello world"
for (const s of str) {
    console.log(`each character is ${s}`);
}


//Maps key value pairs hold karta hai- keys unique hai 
// A map object is iterated by key value pairs. a for of loop returns a 2 member array of key & value for each iteration

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States")
map.set("Fr", "France")
map.set("Fr", "France") // dubara france nhi store hoga bcz unique key hai 
console.log(map);

for (const key of map) {
    console.log(key);
}
//upar wale for of loop se each key-value ke array print hoga.
//waisa array type nhi chyhe to niche wala tarika use kro . same for of loop but key & value ko alag alag retireve kar rhe

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}


// for of loop on object -  not applicable bcz object are not iterable
/*
const myObject = {
    'game1': "GTA V",
    'game2': "Cyberpunk",
    'game3': "FIFA 23"
}

for(cons [key, value] of myObject){
    console.log(key, ":- ",  value);
    
}
 */