/*
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,100,700));
*/
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,100,700,122,421));


const user={
    username:'hitesh',
    price:199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

const myNewArray=[200,400,100,600]

function returnSecondValue(getarray) {
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));