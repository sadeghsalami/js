// data type
/*
number
string
array
object
function
undefined
null
boolean
date
*/

// operators
// Assignment OP انتسابی

let a = 10;
let b = "10";
// == , === comparission OP
// == برابری از نظر مقدار
// === برابری از نظر نوع و مقدار

// console.log(a != b);

// !
// <= ,>=

// console.log(a <= b);

// logical OP
// && , ||

// true && true ===> true
// false && true ===> false
// true && false ===> false
// false && false ===> false

// true || true ===> true
// false || true ===> true
// true || false ===> true
// false || false ===> false

// !true ===> false
// !false ===> true

// Math OP
let n = 10;
let m = 15;

let c;
// c = n + m

// n = n + m // n += m
// n -= m
++n;

// console.log(n);

// string
let str1 = "Sabzevar-is-big";
let str2 = "Beauty";

let result;

// Concatenation  اتصال / الحاق رشته
result = str1 + " " + str2;

result = "ali's book";
result = "ali's book";

result = str1.length;
result = str1.concat(str2);
result = str1.indexOf("x");
result = str1.charAt();
result = str1.includes("bz");

result = str1.substring(3);
result = str1.slice(1, -2);
result = str1.split("-");
result = str1.replace("a", "x");

// str1 = str1.toLowerCase()
// str1 = str1.toUpperCase()

result = str1.replace("SABZEVAR", str2);
result = str1.repeat(5);

result = str1.endsWith("big");
result = str1.startsWith('sa')

console.log(result);

// date

let date = new Date();
console.log(date);
let now;
now = date.getTime();
now = date.getMonth()
now = date.getDate()
now = date.getHours()
now = date.getMinutes()
now = date.getDay()
// now = date.setFullYear(2025)
now = date.getFullYear();

// now = date.toDateString()
now = date.toLocaleDateString('fa-IR')

let year = now.split('/')[0]
// let year = now.substring(0,4)

console.log(year);
