/*
// Here the var is function scope and we can retrieved this outside the if loop
so that's why we can't use this 

if (true){
    let a=10
    const b=20
    var c=30    
}
// console.log(a);
// console.log(b);
console.log(c);

*/

// var c=300   //global scope
let a=300
if (true){
    let a=10
    const b=20
    console.log('INNER:',a);
}
console.log(a);
// // console.log(b);
// console.log(c);

// scope in console is different and the global scope during running node is different
// inside {} whatever is there that is scope which show different type of scope


