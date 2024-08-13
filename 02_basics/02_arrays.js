const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

/*
marvel_heros.push(dc_heros) // arrays will not merge rather 2nd array will be considered as one whole data & that will be inserted at the end of 1st array
console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); // marvel wali ka 3rd element which is an array & then uska 1st element which is flash
*/

/*
const concatArray =  marvel_heros.concat(dc_heros) // concats & returns new array
console.log(concatArray);// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
*/

//spread (...) - another method to add arrays
const spreadHeros = [...marvel_heros, ...dc_heros]
console.log(spreadHeros);

// flat() operator agr kabhi array ke andar array mile to usko ek single array me convert krne ke liye. () ke andar kitna depth tk flat krna hai likhna hoga....but simply write infinity
const deep_array = [1, 2, 4, [5, 9, 5, [4, 9, 7], 1], 0, 4, 6, [4, 5, [0]], 8]
const flatenArray = deep_array.flat(Infinity)
console.log(flatenArray);


console.log(Array.isArray("Vivek")) // can check whether array or not
console.log(Array.from("Vivek"))  // this will make an array from string

console.log(Array.from({name: "vivek"})); // empty array deta hai bcz- 
// The Array.from() method in JavaScript creates a new array instance from an array-like or iterable object. However, when you pass an object that is neither array-like nor iterable, Array.from() returns an empty array.

//another way to make arrray - use Array.of()
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));








