const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // push in existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let allHeros = marvel_heros.concat(dc_heros) // return a new array
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // ... is spread operator that spread all element of arr (in this case)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



// console.log(Array.isArray("amit")); // false
// console.log(Array.from("amit")); // [ 'a', 'm', 'i', 't' ]
// console.log(Array.from({name:"amit"})); // interesting { return -> [] , because we need to specify that array made by using their keys and their values (in the case of object)}


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));