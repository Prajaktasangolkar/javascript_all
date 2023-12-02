const score=400
const balance=new Number(100)
console.log(balance);
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //after decimal decimal
const otherNumber=123.8967
 console.log(otherNumber.toPrecision(3));
const otherNumber1=1123.8967
 console.log(otherNumber1.toPrecision(3));
 
const hundreads=1000000
console.log(hundreads.toLocaleString('en-IN'));

// ++++++++Maths+++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(9.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(3,1,6,8));
console.log(Math.max(3,1,6,8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) +1); //so value can't be 0


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)))