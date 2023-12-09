// let myName="Praju   "
// console.log(myName.length);
// // console.log(myName.trim().length);
// console.log(myName.truelength());

let myHeros=['thor','spiderman']
let heroPower={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHitesh=function(){
    console.log(`hitesh is hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()  //not have power of array


// ++++++++++++++inheritance+++++++++++++++

const User={
    name:'chai',
    email:'chai@gmail.com'
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern structure
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode   "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}


anotherUsername.trueLength()
'hiesh'.trueLength()
