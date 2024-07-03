// let myName = 'Amit    '
// let myChannel = 'chai     '


// console.log(myName.truelength());


let myHeros = ['thor' , 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getspiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.amit = function(){
    console.log(`amit is present in all object`);
}

Array.prototype.heyAmit = function(){
    console.log(`Amit says hello`);
}

// heroPower.amit()
// myHeros.amit()

// myHeros.heyAmit()
// heroPower.heyAmit()


// inheritance

const user = {
    name : 'chai',
    email : 'chai@google.com'
}

const Teacher = {
    makeVideo : true ,
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// console.log(TASupport.isAvailable);

// modern Syntax
// Object.setPrototypeOf(TeachingSupport , Teacher)




let anotherUsername = 'chaiAurCode     '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}


anotherUsername.trueLength()
'amit'.trueLength()
'iceTea'.trueLength()