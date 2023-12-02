let value=3
let nvalue=-value
console.log(nvalue);
console.log(1+"2");
console.log("2"+1);
console.log("1"+"2");
console.log('1'+2+2);  //prefer as string
console.log(1+3+"2");  //prefer as number 
console.log('1'+(2+2));
console.log(+true);
console.log(+"");


// increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);