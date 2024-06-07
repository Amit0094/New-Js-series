// String interpolation

const name = "amit"
const repoCount = 3

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

let gameName = new String('amit-pal-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t')); // return index of t

const newString = gameName.substring(0,4) // 0 to (4-1)
// console.log(newString);

// Not Working.....
// const anotherString = gameName.slice()
// console.log(anotherString);

const newStringOne = "       amit       "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://amitpal.com/amit%20pal"
console.log(url.replace('%20','-'));

console.log(url.includes('amit')); // return in true/false according to inputs


console.log(gameName.split('-'));