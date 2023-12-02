const marval_hero=['thor','iron','spider']
const dc=['gg','qhd','dy']

// marval_hero.push(dc)
// console.log(marval_hero);
// console.log(marval_hero[3]);
// console.log(marval_hero[3][2]);
// console.log(marval_hero);
const new_arr=marval_hero.concat(dc)
console.log(new_arr);

const all_new_heros=[...marval_hero,...dc]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,9,[9,10]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray('Arrab'));
console.log(Array.from('hiten'));
console.log(Array.from({name:'Hiten'})); //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []


console.log(Array.of(undefined));
// Expected output: Array [ undefined ]
