const user = {
    username: "Amit",
    price: 999,
    // The this keyword refers to the current context like -> (username , price )
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage() // here Amit is print
// user.username = "Sam"
// user.welcomeMessage() // but, here sam is print

// console.log(this); // {} -> here this refer to the empty object

// note that when we run the line 16 on browser , it return a window object (which is the global object in the browser)



// function chai(){
//     let username = "amit"
//     console.log(this.username); // undefined -> { can't be used inside the function }
// }

// chai()


const chai = function(){
    let username = "amit"
    console.log(this.username); // undefined
    console.log(this); // return -> Object [global] who contains my methods....
}

// const chai = () => {
//     let username = "amit"
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // an implicit return is a way to return a value from a function without explicitly using the return keyword


// const addTwo = (num1, num2) => (num1 + num2)
// when we used here parenthesis there is no need to write the return keyword but when we use the curly braces then return keyword is must be write


const addTwo = () => ({ username: "Amit" }) // example of why we should be used parenthesis

// console.log(addTwo());


// const myArray = [2, 3, 4, 5, 6]
// myArray.forEach(() => {})