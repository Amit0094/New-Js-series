function setUserName(username){
    // complex DB calls
    this.username = username  // when i pass this from createUser function to setUserName fnuction then in the place of this.username this refer to the context of createUser not setUserName
    console.log(this);
    console.log('called');
}

function createUser(username,email,password){
    setUserName.call(this ,username)   // *Need to hold refrence of username
    this.email = email
    this.password = password
}

const newUser = new createUser('Amit',"ap21@fb.com",1243)

console.log(newUser);