class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username) // it automatically take this and pass into it and complete all step which we do earlier in functional syntax...
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai = new Teacher('chai','chai@gmail.com',123)

// chai.addCourse()
// chai.logMe()
const masalaChai = new User('masalaChai')

// masalaChai.logMe()



// console.log(chai === masalaChai); // false

// console.log(chai === Teacher); // {false} not equal chai is instance of teacher for verifying that let's take one more example..

console.log(chai instanceof Teacher); // true

console.log(chai instanceof User);