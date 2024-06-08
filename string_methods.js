let str = "amit Pal"
let str1 = "Hello"
let str2 = "World"

// console.log(str.anchor('username'));  // return -> <a name="username">amitPal</a>
// console.log(str.at(2)); // take parameter as index of string and has byDefault value is 0 index and return the element present at that given index..

// console.log(str.big()); // it take no any inputs and return a html code like this - { <big>amitPal</big> } , it simply manipulate the font size of string...

// console.log(str.blink()); // return - { <blink>amitPal</blink> } , This feature is no longer recommended

// console.log(str.bold()); // return - { <b>amitPal</b> } , that's simply make string bold

// console.log(str.charAt(2)); // Returns the character at the specified index.{ byDefault value is 0 }

// console.log(str.charCodeAt(3)); // Returns the Unicode value of the character at the specified location.
// UTF-16 (16-bit Unicode Transformation Format)
// UTF-16 is used by systems such as the Microsoft Windows API, the Java programming language and JavaScript/ECMAScript. It is also sometimes used for plain text and word-processing data files on Microsoft Windows. It is used by SMS (the SMS standard specifies UCS-2, but almost all users actually implement UTF-16 so that emojis work).[ci

// console.log(str.codePointAt(2));  // The charCodeAt() method returns the UTF-16 code unit at the specified index, while codePointAt() returns the Unicode code point of the character at the specified index

// console.log(str1.concat(" ",str2)); // return  Hello World  {simply adding both string}

// console.log(str.endsWith(0)); // The endsWith() method of String values determines whether a string ends with the characters of this string

// console.log(str.includes('P')); // The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// console.log(str.indexOf('Pal')); // The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.

// console.log(str.lastIndexOf("amit")); // Returns the last occurrence of a substring in the string.

// console.log(str.link("https://developer.mozilla.org/")); // return -> <a href="https://developer.mozilla.org/">amit Pal</a>

console.log(str.slice(-3));