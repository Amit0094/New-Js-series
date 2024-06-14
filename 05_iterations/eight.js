const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)

// short-hand
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice);


// reduce just add the all numbers in an array -> [1,2,3] result = 6