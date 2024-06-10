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
// console.log(loginUserMessage()); // when we not pass any argument in funcion then it return undefined -> { undefined just logged in }






// when we don't know about the number of argument

function calculateCartPrice(val1 , val2 , ...num1){ // ... rest operator , simply return an array of element of argument which is passed during function call
    return num1
}

// console.log(calculateCartPrice(200,100,300,400)); // [ 200, 100, 300, 400 ]

// console.log(calculateCartPrice(100,200,300,400,500)); // [ 300, 400, 500 ] because 100 and 200 assigned in val1 and val2 respectively..


// object passed as an argument

const user = {
    username : "amit",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "Sam",
    price : 399
})

// array passed as an argument

const myNewArray  = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([9,99,999]));

