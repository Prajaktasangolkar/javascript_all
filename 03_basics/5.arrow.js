const user={
    username:'praju',
    age:22,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username='sam'
user.welcomeMessage()
// console.log(this);  //{} we will get this


// We can't use this in function 
function chai(){
  let username='hii'
  console.log(this.username); //this will give undefined value
}
chai()

// so use arrow for this
// but this is also give undefined as output
// ++++++++++++++++Arrow+++++++++++++++++++++++++++++++++++++
const chai1=()=>{
    let username='Hitesh'
    console.log(this.username);
}
chai1()

// const addTwo=(num1,num2)=>{
//   return num1+num2;
// }
// ----this is implicite function-----
// const addTwo=(num1,num2)=>num1+num2;

const addTwo=(num1,num2)=>({username:'hitesh'}); //username wants in ({})this only
console.log(addTwo(3,4));