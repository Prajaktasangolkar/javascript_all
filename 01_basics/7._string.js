const name='hitesh'
const repoCount=50

console.log(`Hello my name is ${name} and the count is ${repoCount}`);

const gameName=new String('hiteshhc');
console.log(gameName);
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));


const newString=gameName.substring(0,4);
console.log(newString);

const anotherstring=gameName.slice(-8,3);
console.log(anotherstring);

const newStringOne='  hiten  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url='http://bdnn.com%20/chii'
console.log(url.replace('%20','-'));
console.log(url.includes('bdn'));

const gameName1=new String('hite-sh-hc');
console.log(gameName1.split('-'));