// Immediately Invoked Function Expression(IIFE)
// When we don't want any depenedent operator and we want privacy from outside the world
// no one can get that dat inside this
// we can use parameters in it and this all are safe
// means private from outside
// want sepecific functionality want it private
// have 2 part grouping operator and immediatly invoke function


// This is name IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// This is simple IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}` );
})('hitesh')