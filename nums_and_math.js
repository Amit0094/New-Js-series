const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Returns a string representing a number in fixed-point notation.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // default 'en-IN'

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);


// +++++++++++++++ Maths ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // change into 4 {but when i pass 4 into this then it can't become -4}

// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2)); // top value
// console.log(Math.floor(4.3)); // lowest value

// console.log(Math.pow(2,4));
// console.log(Math.max(5,4,3,2));
// console.log(Math.min(5,4,3,2));


// console.log(Math.random()); // Returns a pseudorandom number between 0 and 1.
// console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // important***