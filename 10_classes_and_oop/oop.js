// 1.Object literal
const user={
      username:'hitesh',
      loginCount:8,
      sifnedIn:true,
      getUserDetails: function () {
            // console.log("Got user details from database");
            console.log(`'username':${this.username}`);
            console.log(this);
      }

}
console.log(user);
console.log(user.username);
console.log(user.getUserDetails());

// 2.Constructor
function User1(username,loginCount,isLoggedIn){
      this.username=username,
      this.loginCount=loginCount,
      this.isLoggedIn=isLoggedIn
      this.getUserDetails=function () {
            console.log(`'welcome':${this.username}`);
      }
      return this  //without this also code will run
}

// const userOne=User1('hitesh',12,true)
// const userTwo=User1('praju',132,false) //without calling this thia will oevrrride the all values

// so constructor will give u new instance like by using new work so whatever u will do doesn't affect the real object this will make copies only

const userOne=new User1('hitesh',12,true)
const userTwo=new User1('praju',132,false) 
console.log('u',userOne);
console.log(userOne.constructor());
