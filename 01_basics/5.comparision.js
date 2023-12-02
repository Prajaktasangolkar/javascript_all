// console.log(2>1);
// console.log(2<=1);
// console.log(2==1);


console.log("2">1);
console.log("02">1);


/*
The reason is that an equality check == and comparisons > <>=<= work differently
comparisons convert null to a number ,treating it as 0 .
That's why (3) null >=0 is true and (1) null >0 is false
*/
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// all are false
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

// stick check === this will check value and data type
console.log('stick check===');
console.log("2"===2);
console.log("2"==2);