// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // this is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const reguralUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amit",
            lastname: "Pal"
        }
    }
}

// console.log(reguralUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = { 5: "e", 6: "f" }

// const obj4 = {obj1,obj2}
// const obj4 = Object.assign({}, obj1, obj2,obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "amit@gmail.com"
    },
    {
        id: 1,
        email: "amit@gmail.com"
    },
    {
        id: 1,
        email: "amit@gmail.com"
    },
]

// console.log(users[1].email); // amit@gmail.com
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return an array of keys like this -> { [ 'id', 'name', 'isLoggedIn' ] }
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable properties of an object


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true








// *******************************************************************

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);


// {
//     "name" : "amit",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]