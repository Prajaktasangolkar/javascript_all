// how they are store in memory depend on that 2 data types
/* 1.Primitive data type
7 charageries
string ,Number,Boolean,null,undefined,symbol(make value unique),BigInt
*/

console.log(typeof(12.0));
const a=12
const b=78.9
const c='hii'
const d=null
let f;

console.table([a,b,c,d,f])

const id=Symbol('123');
const anotherId=Symbol('123')

console.log(id===anotherId);  //values are not same

const bigNumber=89267828873666729n //when we put n then it will became bigInt
console.log(typeof(bigNumber));


/*2.Reference (Non Primitive)
array,objects,Functions
*/

console.log('2.Reference');
const heros=['shaktiman','naagraj'];
// objects
let myobj={
    name:"hii",
    age :22,
}
console.log(typeof(heros));
console.log(typeof(myobj));
const myFunction=function(){
    console.log('hello world');
}
myFunction()
console.log(typeof(myFunction));

// https://262.ecma-international.org/5.1/#sec-11.4.3