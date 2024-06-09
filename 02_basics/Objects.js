// singleton
// Object.create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "amit",
    "Full Name": "Amit Pal",
    [mySym]: "mykey1", // symbol used as a key in object -> {  [Symbol(key1)]: 'mykey1' }
    age: 18,
    location: "kudra",
    email: "ap218905@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);

// console.log(jsUser[mySym]);
// console.log(typeof mySym === 'symbol');

jsUser.email = "chat@gmail.com"
// Object.freeze(jsUser) // simply freeze the object , after feezing nothing will be changed in the object
jsUser.email = "chat@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello JS user !");
}
jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(jsUser.greeting); // [Function (anonymous)]  Here function is not execute, only the function refrence is received
console.log(jsUser.greeting());
console.log(jsUser.greeting2());