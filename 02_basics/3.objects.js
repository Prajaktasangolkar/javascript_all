//singleton - by using constructor we can make singleton
// Object.create

// object literals
const JsUser={
    name:'Hitesh',
    "full_n":'hduw',
    age:18,
    location:'Jaipur',
    isLoggedIn:false,
    email:'p@gmail.com',
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser.full_n);
console.log(JsUser['full_n']);

// add symbol as a Key inside object

const mysym=Symbol('key1')
const JsUser1={
    name:'Hitesh',
    "full_n":'hduw',
    age:18,
    // mysym:'mykey1',
    [mysym]:'mykey1',

    location:'Jaipur',
    isLoggedIn:false,
    email:'p@gmail.com',
}

console.log(JsUser1[mysym]);
console.log(typeof JsUser1[mysym]);  //this will give string as type of but we use as symbol in object

JsUser1.email='iid@gmail.com'
console.log(JsUser1);
// Object.freeze(JsUser1) //this will freeze the object means after that what ever u will chnage not shown in real object
JsUser1.email='ngviid@gmail.com'
console.log(JsUser1);

/*
// The symbol in the output is show as   email: 'iid@gmail.com',
//  [Symbol(key1)]: 'mykey1'
and not shown as mySym='mykey1
*/

// const sym=Symbol('hii')
// console.log(typeof sym);

// Functions
JsUser1.greeting=function () {
    console.log('Hello js user');
}

JsUser1.greetingTwo=function () {
    console.log(`Hello js user,${this.name}`);
}
console.log(JsUser1.greeting());
console.log(JsUser1.greetingTwo());
