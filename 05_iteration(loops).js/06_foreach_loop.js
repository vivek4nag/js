// for each loop - method that is specifically available on arrays. It is used to execute a provided function once for each array element.
//syntax - 
/* array.forEach(function(currentValue, index, array) {
    // Your code here
  });
  currentValue: The current element being processed in the array.
  index (optional): The index of the current element.
  array (optional): The array forEach was called upon.*/

const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop ke andar callback function chayeh . callback function ka naam nhi hota hai so koi naam nhi denge & kyuki ye function arrray ke anda chal rha to automatically har ek item pr iterate krega
coding.forEach( function (val){
    //console.log(val);
});

//the abovve syntax will print the elements of the array

//we can also use arrow functions
coding.forEach( (item) =>{
    //console.log(item);
    
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe); // here we are passing a function as a argument to forEach function which will print each item of the array
// note that we are just giving reference i.e. sirf printMe likh rhe & not printMe()


//for each loop can pass three arguments to the callback: the current element, the index of the current element, and the original array.
//if we are paasing 3 parameters then in every iteration item will be printed along with index & The array parameter allows access to the original array within the callback function
coding.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
})


//objects in the array - will apply foreach loop to iterate over this array
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    //every item is an object & per object we can access the value using dot(.) operator
    
})