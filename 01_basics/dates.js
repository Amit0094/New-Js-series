// Dates

// proposal :- https://tc39.es/proposal-temporal/docs/index.html


let myDate = new Date()
// console.log(myDate.toString()); // return -> { Sat Jun 08 2024 15:26:17 GMT+0530 (India Standard Time) }

// console.log(myDate.toDateString()); // return -> { Sat Jun 08 2024 }

// console.log(myDate.toLocaleString()); // return -> { 8/6/2024, 3:27:19 pm }

// console.log(myDate.toISOString()); // return -> { 2024-06-09T01:52:35.728Z }

// console.log(myDate.toJSON()); // return -> { 2024-06-09T01:57:14.383Z }

// let json = myDate.toJSON()
// console.log(json);
// console.log(new Date(json).toUTCString());

// console.log(myDate.toLocaleTimeString()); // 2024-06-09T01:57:52.815Z
// 7:27:52 am



// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // month start with 0 in Js
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23,5,3,20)
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:20 am


// let myCreatedDate = new Date("2023-01-14") // return -> { 14/1/2023, 5:30:00 am }
let myCreatedDate = new Date("01-14-2023") // return -> { 14/1/2023, 12:00:00 am }
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getFullYear());

// console.log(`Hello I'm Amit and i woke up everyday at ${newDate.getHours()}:${newDate.getMinutes()} and current year is ${newDate.getFullYear()}`);


console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));