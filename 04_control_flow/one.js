// if
// if (condition)
// >,<,<=,>=,==,!=,===
const isUserloggedIn=true
const temperature=41

if (temperature<50){
   console.log('less than 50');
}
console.log('temperature is greater than 50'); //not releated with if condition it will run always

// ifelse
if (temperature<50){
    console.log('less than 50');
 }
 else{
     console.log('temperature is greater than 50');
 }

const score=200
if (score>100){
    const power='fly'
    console.log(`User power:${power}`);
}
// console.log(`User power:${power}`); //block scope const

const balance=1000
// if (balance>500) console.log('test'), console.log('test1');  //don't write code like this


if (balance<500){
    console.log('less than 500');
}
else if(balance<900){
    console.log('less than 900');
}
else{
    console.log('greater than ');
}


// example
const userLogIn=true
const debitcard=true
const  loggedInfromGoogle=false
const  loggedInfromEmail=true

if (userLogIn && debitcard && 2==2){
    console.log('Allow to buy course');
}

if (loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
}

