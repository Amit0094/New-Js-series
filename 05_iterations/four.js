const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

let arr = ["js", "rb", "py", "java", "cpp"]

// for-in loop on array return its key or index number

// for (const key in arr) {
//     console.log(`At index ${key} the value is ${arr[key]}`);
// }



const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// on map for-in not work

// for (const key in map) {
//     console.log(key);
// }