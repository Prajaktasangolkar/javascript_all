function saymyname(params) {
    console.log('h');
    console.log('i');
    console.log('i');
}
// saymyname();

/*
function addTwoNumber(number1,number2){
   console.log( number1+number2);
}
addTwoNumber(3,2)
// addTwoNumber(3,null)
*/

function addTwoNumber(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result= addTwoNumber(3,2)
console.log('Results:',result);

function loginUserMessage(username) {
    // if (username===undefined){
        if (!username){
        console.log('Plz enter username');
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('praju'));
console.log(loginUserMessage());
/*
// give default value
function loginUserMessage(username=='sam') {
    // if (username===undefined){
        if (!username){
        console.log('Plz enter username');
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('praju'));
console.log(loginUserMessage());
*/

