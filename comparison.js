// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// when you compare two number or anything make sure that datatype be equal of both
// console.log("2" > 1);
// console.log("02" > 1);


// the reason is that an equality check == and comparisons < > >= <= work differently.
// Comparisons convert null to a number, treating it as 0 . That's why (3) null >= 0 is true and (1) null > 0 is false 

// please avoid this type of conversion....always prefer clean code

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// === (strict check , not conversion happen)
console.log("2" === 2);