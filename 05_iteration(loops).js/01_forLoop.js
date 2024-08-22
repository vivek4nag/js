// for loop - sab same as java 
/*for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);

}*/

for (let i = 0; i <= 4; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 4; j++) {
        // console.log(`inner loop value ${j} & outer loop ${i}`);   
    }
}

let myArray = [1, 2, 3, 6, 8, 2, 9]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
  //  console.log(element);
    
}

//break & continue
for (let i = 1; i <= 20; i++) {
    const element = i;
    if(i == 5){
        console.log("detected 5 ");
        break; 
    }
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    const element = i;
    if(i == 5){
        console.log("detected 5 ");
        continue 
    }
    console.log(i);
}