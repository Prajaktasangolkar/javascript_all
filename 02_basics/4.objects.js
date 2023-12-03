// by using singleton or constructor declare the object

/*
const tinderUser=new Object()  //this is singleton object
const tinderUser={}  //this is not singleton object
*/


// +++++++This is constructor+++++++++++++++
// const tinderUser=new Object()
const tinderUser={}
tinderUser.id='123jjjc'
tinderUser.name='hitendra'
tinderUser.isLoggedIn=false
// console.log(tinderUser);

//+++++++++++++++++++++++++++
// +++++Object literals+++++++++++++
const regularUser={
    email:'some@gmail.com',
    fullname:{
        userfullname:{
          firstname:'hitesh',
          lastname:'choundary'
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// 1.assign function join the targeted objects
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj4={5:'a',6:'b'}

// const obj3={obj1,obj2}
// {}=traget obje | obj1,obj2 =source object
const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);

/*
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
const returnedTarget = Object.assign({},target, source); //both give same ans

console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//2.spread

const obj5={...obj1,...obj2,...obj4}
console.log(obj5);

const users=[
    {
        name:'hhu',
        id:1
    },
     {
        name:'hhu',
        id:2
    },
    {
        name:'hhu',
        id:3
    },
]
console.log(users[1].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(typeof Object.keys(tinderUser));//but this is array we can use array functions on this
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));


// ++++++Myspace++++++++++++++++++++++++++++++++++++
const numberObj = new Number(1);
console.log(numberObj); // "object"

const bigintObj = Object(1n);
console.log(bigintObj); // "object"

const symbolObj = Object(Symbol("foo"));
console.log(symbolObj); // "object"
