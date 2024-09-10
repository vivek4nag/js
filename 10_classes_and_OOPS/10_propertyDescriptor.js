//   property descriptor is an object that contains detailed information about the property, including its characteristics like whether it's writable, enumerable, configurable, and its value (or getter/setter functions if it’s an accessor property).
/* Object.getOwnPropertyDescriptor(obj, prop) ==> 
    obj: The object on which to find the property. 
    prop: The name (or Symbol) of the property whose descriptor you want to retrieve.
*/


const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
/* op ayga -
    {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false

  now note- since PI value is univeral constant it's value can't be changed by any mean hence writable & enumerable is false. also it can't be configured
}
*/

const phone = {
    name: 'iPhone 16',
    price: '$799', 
    isAvailable : true,
    comment : function(){
        console.log("aukaat ke bahar");
        
    }
}

console.log(phone);
console.log(Object.getOwnPropertyDescriptor(phone, "name"));
/* 
{
  value: 'iPhone 16',
  writable: true,
  enumerable: true,
  configurable: true
}
  note that here sab true hai means we can change & play around with values bcz Object to humne hi bnaye hai 
*/


// defineProperty =  it is used to define or modify multiple properties on an object at once. It allows us to specify attributes for each property, such as whether it's writable, enumerable, or configurable, as well as its value or getter/setter methods.
Object.defineProperty(phone, 'name', {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(phone, "name"));
/*
{
  value: 'iPhone 16',
  writable: false,
  enumerable: false,
  configurable: true
} note that ab humne 2 rpoperty ko false set kr diya hai to we ccan't change those properties
*/

for (let [key, value] of Object.entries(phone)) {
    if(typeof value !== 'function'){ // basically agr ye check nhi lgayenge to function as it is print ho jayga. but we eant key value pair. so we are checking ki agr value ki type function nhi hai to print kro & yes we can simply write funnction inside single quote
      console.log(`${key}: ${value}`);
      //ab humne upar define property me name ka enumereble false kar rkha hai so jab print krenge to name print nhi hoga


    }
    
}


