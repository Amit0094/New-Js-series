// if statement

const isUserLoggedIn = true
const temperature = 41

// if (temperature === 41) {  // for execution of if block the condition must be true
//     console.log("less than 50")
// } else {
//     console.log("temperature greater than 50");
// }
// console.log("executed");

// < , > , <= , >= , == , != , === , !==
// 2 == '2' -> true
// 2 === '2' -> false



// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`); // *Error -> ( power is a block scope variable can't access outside the if statement )



// short-hand notation

// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");  // implicit scope (❌ not a good practice)


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLogged = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLogged && debitCard && 2==3){
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
}