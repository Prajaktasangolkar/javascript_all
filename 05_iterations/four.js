// +++++++++++forin+++++++++++++++++++++++
// On array ,objects
// not applicable in maps

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject.key}`); //same ans as below
console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=['js','rb','py','java']

for (const key in programming) {
   console.log(programming[key]);
}
// for (const key of programming) {
//     console.log(key);
// }

// ++++++++++++maps+++++++++++++++++++++++++++
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
// maps have unique keys and they are in order
map.set('NO','India')  //key are uniques not values
// console.log(map);


for (const key in map) {
    console.log(key);
}//not done iteration in this using in


// +++++++++string++++++++++++++++
const hii='hii i am heere'
for (const key in hii) {
  console.log(hii[key]);
}
