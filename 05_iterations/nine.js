// +++++++++++++reduce++++++++++++++++++++++++


/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

?
//-----1st start with accumulator=initialvalue=0 and current is array1[0]
//----2nd  then accumulator chnages to addition of accumulator+currentvalue
//----3rd after that currentvalues are all array indexes and accumulator is sum

*/
const myNums=[1,2,3]

const myTotal=myNums.reduce(function (acc,currval) {
    console.log(`acc : ${acc} and currval:${currval}`);
    return acc + currval;
},0)
console.log(myTotal);

const myT=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myT);

const shoopingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'py course',
        price:3999
    },
    {
        itemName:'java course',
        price:4999
    },
]
const priceToPay=shoopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);


// for (const key in shoopingCart) {
//   console.log(shoopingCart[key].price);
// }
