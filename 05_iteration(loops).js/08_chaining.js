const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//suppose we want to add numbers to each element of the array
// we will use map function . again it will use callback function
// & this map function automatically returns a new array 
const newNums =  myNums.map( (num) => num + 10)
console.log(newNums); // har element me 10 add krke de dega

//agr scope open kr diya to return use krna pdeaga
const nayaNums = myNums.map( (num) => {
    return num + 20;
})
console.log(nayaNums);


// chaining
// pehle wale map me num*10 hoga then 2nd iteration me us har ek element ke sath 5 add hoga & then filter wla funtion chlega.. hence we can chain multiple function like this using dot operator
const newArr = myNums
                .map((num) => num *10)
                .map((num) => num + 5)
                .filter((num) => num >= 50)

console.log(newArr);


