let score = 39

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN -> type(number)
// undefined => NaN -> type(number)
// true => 1; false => 0
// null => 0 -> type(number)


let isLoggedIn = "amit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "amit" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Problem...
// let num = "33abc"
// let originalNum = Number(num)
// console.log(originalNum);
// if(((typeof originalNum)==(typeof 5)) && (originalNum!=NaN)){
//     console.log("number");
// }else{
//     console.log("not a number");
// }


// ******************** Operations *********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " amit"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(+true); // 1
// console.log(+""); // 0

// focus on readability
let num1 , num2 , num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
// console.log(gameCounter);


let x = 3;
const y = x++;
// the increment operator increments and returns the value before incrementing.
console.log(`x:${x}, y:${y}`);


let a = 3;
const b = ++a;
//  the increment operator increments and returns the value after incrementing.
console.log(`a:${a}, b:${b}`);