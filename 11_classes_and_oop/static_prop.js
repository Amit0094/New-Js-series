class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    // static stop createId being accessed..
    static createId(){
        console.log(Math.floor(Math.random()*10+1));
    }
}


const amit = new User('Amit')

// amit.createId()


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher('iphone','i@phone.com')

iphone.logMe()
iphone.createId() // *Error is occur here too