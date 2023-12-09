// promises are objects

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    // Db calls,cryptography,network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    },1000)
})
 //promises take callback

promiseOne.then(function(){
    console.log("Promise consumed");
})

// 1st task will complete then it will be resolve and then part will be done
// after calling resolve only .then part will work

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@chai.com"})  //object will pass == which is data
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

/*
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({username:"praju",email:"chai@chai.com"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})


promiseFour.then((user)=>{
 console.log(user);
 return user.username
}).then((username)=>{
   console.log(username);
}).catch(function(error){
    console.log(error);
})

// answer
// Async task is complete
// Promise consumed
// Async task 2
// async 2 resolved
// { username: 'chai', email: 'chai@chai.com' }
// Error:Something went wrong
*/

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error){
            resolve({username:"praju",email:"chai@chai.com"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})


promiseFour.then((user)=>{
 console.log(user);
 return user.username
}).then((username)=>{  //.then(user).then(username)
   console.log(username);
}).catch(function(error){
    console.log(error);
})

//answer
/*
Async task is complete
Promise consumed
Async task 2
async 2 resolved
{ username: 'chai', email: 'chai@chai.com' }
{ username: 'praju', email: 'chai@chai.com' }
praju
*/

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error){
            resolve({username:"praju",email:"chai@chai.com"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})


promiseFive.then((user)=>{
 console.log(user);
 return user.username
}).then((username)=>{  //.then(user).then(username)
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>
console.log("The promise is either resolved and rejected ")
)  //this is default
//like error has come or promise will run whatever will be done but this will show that done all things


const promiseSix=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})

async function consumePromiseSix(){
    //async can't handle the error
    try{
        const response=await promiseSix;
        console.log(response);

    }
    catch(error){
           console.log(error);
    }
}

consumePromiseSix()

// async function getAllUsers(){
//    try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(typeof response);
//     const data=await response.json()
//     console.log(data);
//    } catch (error) {
//       console.log("E:",error);
//    }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then ((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))