const coding = ["js", "ruby", "java", "cpp", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // just pass the function reference


// coding.forEach((item, index, arr) => { // in for each loop it can't just provide the element of an array , it also provide the index number of array and arr itself along with each element
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {

    console.log(item.languageName);
})