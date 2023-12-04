// array=forof,forin(using object[key])
// strinf=forof ,forin(using object[key])
// map=forof
// object=forin


// ++++++++++++foreach+++++++++++++++++++
const coding=['js','ruby','java','python','cpp']

// --------method-1-----------
// coding.forEach(function (item){
//     console.log(item);
// })

// --------method-2-----------
// coding.forEach((item)=>{
//   console.log(item);
// })

// --------method-3-----------
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// --------method-4-----------
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageNmae:'javascript',
        laguageFilename:'js'
    },
    {
        languageNmae:'java',
        laguageFilename:'java'
    },
    {
        languageNmae:'python',
        laguageFilename:'py'
    },

]
myCoding.forEach((item)=>{
console.log(item.languageNmae);
})