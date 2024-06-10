// var c = 300
let a = 300 // global scope -> ( it can be accessed all over the code)

if (true) {
    let a = 10 // block scope -> ( can't access outside the if statement or block )
    const b = 20 // also block scope
    // console.log("Inner:",a);
}

// for (let i = 0; i < 10; i++) {
//     console.log("hello Amit");
// }



// console.log("outer:",a);
// console.log(b);
// console.log(c);




let global = 200

{
    let block = 100
    // console.log(block);
}
// console.log(global);
// console.log(block); ❌


// *****************************************************

function one(){
    const username = "Amit"

    function two(){
        const website = "youTube"
        console.log(username);
    }
    // console.log(website); // *error

    two()
}

// one()

if (true) {
    const username = "Amit"
    if(username === "Amit"){
        const website = " youTube"
        // console.log(username + website);
    }

    // console.log(website); // *Error
}

// console.log(username); // *Error


// **************** Interesting ***********************

console.log(addOne(5)); // we can do this in this case
function addOne(num){
    return num+1
}


// console.log(addTwo(5)); // *Error -> { we can't do this in this case}
// const addTwo  = function (num){
//     return num + 2
// }
