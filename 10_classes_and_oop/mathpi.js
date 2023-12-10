// This will not overwrite the value value can not be change
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,  //this will not true we can't chnage
  enumerable: false,
  configurable: false
}
*/

// but we can change that property by taking that property
const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,
    
    orderChai:function(){
        console.log('chai nahi bani');
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable: true, //if false then name will not print
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !='function'){ //don't want the function orderchai only want key value pair
        console.log(`${key}: ${value}`);

    }
}




