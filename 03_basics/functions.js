// function

function sayMyName() {
    console.log("A");
    console.log("m");
    console.log("i");
    console.log("t");
}

// sayMyName // -> refrence of the function
// sayMyName() // -> when we add () it means execution of the function

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwoNumber(num1, num2) {
    return num1 + num2
    // console.log("hello amit"); // do not execute after function return
}

const result = addTwoNumber(3, 5)
// console.log("Result:", result);

function loginUserMessage(username = "Sam"){ // sam is given as a bydefault value...
    // (username === undefined)
    // we generally consider undefined as a false statement in js ,( !username means not false)
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Amit"));
console.log(loginUserMessage()); // when we not pass any argument in funcion then it return undefined -> { undefined just logged in }

