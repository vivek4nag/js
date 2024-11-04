const radius = [1, 2, 3,4];

const area = function(r){
    return (Math.PI * r * r);
}

const circumfernce = function(r) {
    return (2 *Math.PI * r)
}


const calculate = function(arr, logic){
    const output = [];
    for( let i = 0; i< arr.length; i++){
        output.push(logic(arr[i]));
    }

    return output
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumfernce));

console.log(radius.map(area));
console.log(radius.map((ele)=> {
    return ele * 4
}));


