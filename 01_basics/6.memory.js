// ++++++++++++++++++++++++++\
// memory 2 types= Stack(primitive) ,Heap(Non-primitive)


// 1.primitive here the data store in stack like a copy
let myYotubename="hiteshchoudary"
let anothername=myYotubename
anothername='chaiorcode'
console.log(myYotubename);
console.log(anothername);


// 2.non primitive data store in heap like there is addressing memory
// here if change one addresing data other will also change
let userOne={
    name:'hii',
    age :12,
}

let usertwo=userOne
usertwo.age=89

console.log(userOne);
console.log(usertwo);
