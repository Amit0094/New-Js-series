let userName = "Amit Pal"
let Password = 231575
var choice = "red Flower" // prefer not to used 
const userId = 9999 // can't be changed
let state = "Bihar"


userName = "Samir"
Password = "1010"
state = "west bengal"

console.table([userName,Password,userId,state])


let app =99 // global variable 

{
    let app = 0 // local variable
    console.log(app)
    app = app+1
    console.log(app)
}
console.log(app)