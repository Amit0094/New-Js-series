// on the basis of access and store in the memory...

// Primitive ( 7 types )
// String , Number , Boolean , null , undefined , BigInt , Symbol

// statically or dynamically
// In a statically typed language, data types are defined during compile time and cannot change during runtime. This behavior is because of static type checking. In contrast, dynamic typing allows variables to change their data type during runtime.

// Example :- In a statically typed language like Java, you might declare a variable like this: int x = 10; . The type of x is declared as int and cannot be changed. In a dynamically typed language like Python, you could write x = 10 and later change it to a string with x = "hello" 
const score = 100
const scoreValue = 100.3
const str = "amit"

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 348758475847587887487n


// Reference (Non primitive)
// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"amit",
    age:18
}

const myFunction = function(){
    console.log("hello World");
}

// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return Type of dataTypes:

// typeof score -> number
// typeof scoreValue -> number
// typeof str -> String
// typeof isLoggedIn -> Boolean
// typeof bigNumber -> bigint
// typeof outSideTemp -> Object  (null {return type}-> object)
// typeof userEmail -> undefined
// typeof id -> symbol
// typeof anotherId -> symbol
// typeof heros -> object  {but when we check the type of an Array it return 'function'}
// typeof myObj -> object
// typeof myFunction -> function

// {Also the type of NaN is 'number'}













//*****************************************************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "Amit Pal"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email: "ap218905@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "user23@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);