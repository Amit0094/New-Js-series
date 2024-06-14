// for

for (let i = 0; i <= 5; i++) {
    if (i == 5) {
        // console.log("5 is best number");
    }
    // console.log(i);
}

// console.log(i);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop with value of i: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }

}

let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Dectected 5`);
//         break
//     }
//     console.log(`Value of i: ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Ignored or skip 5`);
        continue
    }
    console.log(`Value of i: ${i}`);
    
}