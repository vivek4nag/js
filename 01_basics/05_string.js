const name = "Vivek"
const repoCount = 50
//console.log(name + repoCount + " value"); // basically kuch bhi concatenate kar sakte
// but upar wala tarika use nhi karna

//use niche wala tarika using backticks (`).. jahn concatenate krna hai use ${}
// it is called String interpolation
console.log(`hello my name is ${name} & my repocount is ${repoCount}`);

// we can also use object to make string
const gameName = new String('cyberpunk 2077')
console.log(gameName);
console.log(gameName[0]); //0th character = c

//Every JS object has a prototype, which is another object from which it inherits properties and methods. The __proto__ property provides a way to access this prototype.
console.log(gameName.__proto__);

//now some usage of objects
console.log(gameName.length); //length print krega
console.log(gameName.toUpperCase()); //note ki () lgaya hai bcz uppercase wala ek function hai && jo output aayga wo ek copy hoga means OG string me koi change nhi aayga

console.log(gameName.charAt(5));
console.log(gameName.indexOf('2'));
console.log(gameName.substring(5,12)); //includes 5 but excludes 12 i.e. 5 to 11

console.log(gameName.slice(5, 12));// extracts a section of this string and returns it as a new string, without modifying the original string

const slicedStr = gameName.slice(-8, -2)
console.log(slicedStr); // starts 8 ch from end & end 2 chr from end

// trim & replace
const newString  = "     vievk.  "
console.log(newString);
console.log(newString.trim()); //shuru ke & end ke spaces hata dega

const url = "https://vivek.com/viek%20nag"
console.log(url.replace('%20', '-')); //will replace %20 by -

console.log(url.includes('vivek')); //will give boolean
console.log(url.includes('devta'));


// to split a string based on a particualr character
console.log(gameName.split(' ')); //spliiting based on space & it will return an array

console.log(gameName.bold()); //ye html element return krta hai => <b>cyberpunk 2077</b>
console.log(gameName.blink()); //though not used in modern days
















