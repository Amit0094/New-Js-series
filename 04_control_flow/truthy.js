// const userEmail = "amit@34.ai"
const array = []

// if(userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Don't have user email");
// }

// "amit@34.ai" -> return true
// "" -> return false
// [] -> true


// falsy values
//  -> false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN 

// truthy values
//  "0" , 'false' , " " , [] , {} , function(){} -> (empty function)

// if(array.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Empty object");
// }


// Note *****
// if(false == 0){
//     console.log("true");
// }
// if(false == ''){
//     console.log("true");
// }
// if(0 == ''){
//     console.log("true");
// }



// Nullish coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);


// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80"):console.log("less than 80");
