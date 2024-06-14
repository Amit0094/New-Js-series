const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num)=>{
//    return num+10
// })
// console.log(newNums); // returning a new array 


// we can also do this by forEach...
// let newArr = []
// myNumbers.forEach((num) => {
//     newArr.push(num + 10)
// })

// console.log(newArr);



// chaining -> ( here output of one method is the input of next method )

const newNums = myNumbers.map((num) => num * 10).map((num)=> num + 1).filter((num)=> num >= 40)

console.log(newNums);