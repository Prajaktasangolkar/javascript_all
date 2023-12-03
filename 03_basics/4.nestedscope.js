function one(){
    const username='praju'

    function two(){
        const website='youtube'
        console.log(username);
    }
    // console.log(website); //block scope
    two()
}
// one()

if (true){
    const username='hitesh'
    if (username==='hitesh'){
        const website=' youtube'
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++++++++interesting+++++++++++++++++++++

function addone(num){
    return num+1
}
addone(5)

const addTwo=function (num) {
    return num+2
}
addTwo(5)

/*
addone(5) //if we declare before cinitialization give ans same
function addone(num){
    return num+1
}

addTwo(5)//if we declare before initialization give error
const addTwo=function (num) {
    return num+2
}

*/