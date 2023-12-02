// array
const myArr=[0,1,2,3,4,5] //elements


// shallow copy and deep copy 
// shallow copy= changes done in same reference point if changed
// deep copy= properties do not share same reference point

const myHero=['shatu','ghdjj','hh']
console.log(myHero);
console.log(typeof myHero);

const arr=new Array(1,2,3,4)
console.log(arr);

//array methods
// arr.push(6)
// arr.push(7)
// arr.pop()  //pop last element

// arr.unshift(0)  // add element in starting
// arr.shift()    // remove 0th element in starting

console.log(arr.includes(9));
console.log(arr.indexOf(8));

const newarr=arr.join()
console.log(newarr);
console.log(typeof newarr);


// slice ,splice
console.log("A",arr);
const myn1=arr.slice(1,3)
console.log(myn1);
console.log("B",arr);

console.log("A",arr);
const myn2=arr.splice(1,3)
console.log(myn2);
console.log("B",arr);



