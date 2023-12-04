const userEmail='p@gmail.com'
if (userEmail){
    console.log('Got user email');
}
else{
    console.log('Don not have user email' );
}

const userEmail1=''
if (userEmail1){
    console.log('Got user email');
}
else{
    console.log('Don not have user email' );
}

// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// '0','false', " ",[],{},function(){}
// 0,false,space  inside string =true values

// if (userEmail.length===0){
//     console.log('Array is empty');
// }

const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log('Object is empty');
}

// +++++++++Nullish coalescing Operator (??):null undefined++++++++++++++++++++++++++++

let val1;
// val1=5 ?? 10 //get 1st val
// val1=null ?? 10  //get 10
// val1=undefined ?? 10  //get 10
val1=null ?? 10 ?? 20  //get 10
console.log(val1);

// ++++++++Terniary operator+++++++++++++++++

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") :console.log("more than 80");