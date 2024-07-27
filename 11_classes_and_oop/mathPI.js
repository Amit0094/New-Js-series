const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor);
// as a result : {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }



const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log('Chai nhi bni');
    }
}


// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));



for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}

// console.log(Object.keys(chai));
// console.log(Object.entries(chai));













// The error TypeError: obj is not iterable occurs because you are trying to iterate over an object with a for...of loop, which is meant for iterable objects like arrays, strings, or other data structures that implement the iterable protocol.

// To iterate over the properties of an object, you can use a for...in loop, or you can use methods like Object.keys(), Object.values(), or Object.entries() in combination with forEach() or other iteration methods.