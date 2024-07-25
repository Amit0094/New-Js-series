// javascript does have classes . this feature was introduced with ECMAScript 2015 specification (often referred to as ES6). However , it's important to note that javascript is primarily a prototype-based language  , and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms .


const user = {
    username : "Amit",
    signedIn : true,
    loginCounter : 8,

    getUserDetails: function(){
        // console.log(`Username : ${this.username}`);
        console.log(this);
    },

    getLoginCount:()=>{
        console.log(this);  // {}
        console.log(this.loginCount); // undefined
    }
}

// console.log(user.getUserDetails());
// console.log(this); // return ->  {} , but when i run this same program in browser it return a window object which contains a lot of methods...

// console.log(user.getLoginCount());
// console.log(user.getUserDetails());



// *************************************
// constructor function
function User(username , loginCount , isLoggedIn){
    // property
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // methods

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }


    return this
}

const userOne = new User("Amit" , 12 , true)
const userTwo = new User("chaiAurCode" , 11 , false)
// console.log(userOne.constructor);
// console.log(userOne instanceof User);
// console.log(userTwo);

// when you use new keyword there are following steps will happen :

/*
step-1 : new object will be created ( which we called 'instances' )

step-2 : constructor function called ( whatever you write is all passon into them)
step-3 : Now arguments (function , ...) injected in this keyword
step-4 : finally received in function
*/