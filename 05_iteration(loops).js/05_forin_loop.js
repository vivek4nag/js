//for in loops - The for...in loop is used to iterate over the enumerable properties (keys) of an object. It is primarily used for objects but can also be used with arrays (though it's not recommended for arrays).

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift : 'Swift by Apple'
}

//for in loop to iterete over objects - Iterates over keys: for...in loops over the keys of an object, not the values.

for (const key in myObject) {
    // console.log(key); -> will print keys
    //console.log(myObject[key]); -> will print values
    console.log(`${key} : ${myObject[key]}`); // to print key and value in a single line
}

//does for in loop works on arrays ??
// yes arays does have keys which is numericl indices. arrays are a type of object, and like all objects, they use keys to store values.
//  However, these keys are special in arrays—they are numeric indices, which are automatically assigned in sequential order starting from 0. This is what makes arrays ordered collections of elements.

const myArray= [1, 2, 5, 8, 0, 4];

for (const key in myArray) {
   //console.log(key); // will print arrays ki keys
   //console.log(myArray[key]); // will print array ki values
}


// for in loop on maps -  nahi chalega bcz map  is not iterable, so forin loop koi output nahi dega

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States")
map.set("Fr", "France")
map.set("Fr", "France") 

for (const key in map) {
    console.log(key);  
}