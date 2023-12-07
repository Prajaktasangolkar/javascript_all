// promises are objects

const promiseOne=new Promise(function(resolve,reject){
    //    Do an async task
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
