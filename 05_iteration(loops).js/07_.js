const coding = ["js", "ruby", "java", "python", "cpp"]

//kya for each loop kuch return krta hai... let's see. we store the value of foreach loop in a variable & print it. but this will give undefined
 const forEachValues = coding.forEach( (item) => {
    console.log(item);
})
console.log(forEachValues); // this will print undefined bcz for each loop kuch return nhi karta


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter() method creates a new array with all elements that pass the test implemented by the provided function. filter bhi ek call back function leta hai & then ek condition specify krte hai.
const newNums = myNums.filter( (num)=> num > 5 )
console.log(newNums);

// if we use curly braces i.e. scope     (refer to arrow functions wala notes) then we have to explicitly use the return keyword bcz we are returning an object -
const nayaNums = myNums.filter( (num) => {
    return num < 5
    //curly braces use kr rhe to return keyword use krna pdega
})
console.log(nayaNums);


// agr same thing hume for each loop se karna ho to - 
const newArr = []
myNums.forEach( (num) => {
    if(num > 5){
        newArr.push(num)
    }
})

console.log(newArr);



//ab hum array of objects pe different operation krenge.. aisa hi hum project me/ practical me krnge. database se data fetch krenge(neeche wale type me data milega) & then usme diferent operation krenge

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //give all books having genre history
  //let userBooks = books.filter( (bk) => bk.genre === "History")

  //give books published after 2000
let userBooks = books.filter( (bk) => { 
    return bk.publish >= 1994 && bk.genre === "History"
} )

  console.log(userBooks);
  


