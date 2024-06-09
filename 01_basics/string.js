// String interpolation --- Automatic replacing of variables with real values is called string interpolation.

const name = "amit"
const repoCount = 3

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// String Concatenation 
let fName = "Raj"
let age = 32
console.log("My name is "+fName+" And my age is "+age+".");

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

const newStringOne = "       amit pal       "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim remove all whitespaces(before and after the string) from string


const url = "https://amitpal.com/amit%20pal"
console.log(url.replace('%20','-'));

console.log(url.includes('amit')); // return in true/false according to inputs


console.log(gameName.split('-'));