// const coding=['js','ruby','java','python','cpp']

// const value=coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(value);

//+++++++++filter the num+++++++++++++++++++++
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4)

// const newNums=myNums.filter((num)=>{
//     return num>4  //if using {} so inside this want return keyword
// })

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Mystery', publish: 1995, edition: 2008 },
    { title: 'Book Three', genre: 'Science Fiction', publish: 2002, edition: 2010 },
    { title: 'Book Four', genre: 'Thriller', publish: 1988, edition: 2005 },
    { title: 'Book Five', genre: 'Romance', publish: 1999, edition: 2007 },
    { title: 'Book Six', genre: 'Historical Fiction', publish: 1975, edition: 2001 },
    { title: 'Book Seven', genre: 'Fantasy', publish: 2010, edition: 2015 },
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 1990, edition: 2003 },
    { title: 'Book Nine', genre: 'Biography', publish: 1985, edition: 2002 },
    { title: 'Book Ten', genre: 'Self-Help', publish: 2005, edition: 2012 },
    { title: 'Book Eleven', genre: 'Drama', publish: 1978, edition: 1998 },
    { title: 'Book Twelve', genre: 'Comedy', publish: 2015, edition: 2020 }
];
let userBooks=books.filter((bk)=>bk.genre==='Romance')
userBooks=books.filter((bk)=>bk.publish>=2000)

userBooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==='Romance'
})

console.log(userBooks);