// array

// Shallow copy
// Deep copy

const myArr = [1, 2, 3, 4, 5, 6, true, "amit"]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[7]);

// Array methods

// myArr.push("pal") // Appends new elements to the end of an array, and returns the new length of the array.

// myArr.pop() // Removes the last element from an array and returns it

// myArr.unshift(10) // Elements to insert at the start of the array.

// myArr.shift() // Removes the first element from an array and returns it.

// console.log(myArr.includes(10));
// console.log(myArr.indexOf("amit")); // Returns the index of the first occurrence of a value in an array

// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // Returns a copy of a section of an array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // Removes elements from an array
console.log("C ", myArr);
console.log(myn2);