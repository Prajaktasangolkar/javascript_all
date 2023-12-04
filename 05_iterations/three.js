// for of====== array,object,strings
// not applicable in objects
// This iteration for array 
// ["","",""]
// [{},{},{}]
//++++++++++array++++++++++++++++++++++++++++++
const arr=[1,2,3,4,5]
// iterator=array,objects,strings anything so we can use this loop
for (const num of arr) {
    console.log(num);
}


const greet='Hii I am here'

for (const num of greet) {
    console.log(`Each char is ${num}`);
}

// ++++++++++++maps+++++++++++++++++++++++++++
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
// maps have unique keys and they are in order
map.set('NO','India')  //key are uniques not values
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// +++++++objects++++++++++++++++++++++==not applicable
const myObjects={
    'game1':'NFS',
    'game2':'spiderman'
}

for (const [key,value] of myObjects) {
    console.log(key,':-',value);
}//TypeError: myObjects is not iterable
