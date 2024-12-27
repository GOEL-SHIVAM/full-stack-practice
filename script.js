console.log(1+2);

// variables - var , let , const
const a = 5 ;
const b = 6 ;
console.log(a+b);

// implicit type
var num = '3' + 2 ;
console.log(num);
console.log(typeof num);
var num1 = '3' - 2 ;
console.log(num1);
console.log(typeof num1);
var num2 = '3' - true ;
console.log(num2);
console.log(typeof num2);
var num3 = '3' - 'hello' ;
console.log(num3);
console.log(typeof num3);

// explicit type conversion 
var res = null ;
res = Number(res) ;
console.log(res);
console.log(typeof res);
var res1 = true ;
res1 = String(res1) ;
console.log(res1);
console.log(typeof res1);

// operators => 
// 1. arithmetic(+,-,*,/,**) 
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 5);
// 2. inc/dec op (a++,++a,--a,a--)
var n = 1 ;
console.log(n++);
console.log(n--);
console.log(++n);
console.log(--n);
// 3. comparision op (>,<,>=,<=,!=,==)
var m = 5 , o = 6 ;
console.log(m==o);
console.log(m!=o);
console.log(m>o);
console.log(m<o);
console.log(m>=o);
console.log(m<=o);
// == vs ===
var ab = "6" ;
var ba = 6 ;
console.log(ab == ba); // true
console.log(ab != ba); // false
console.log(ab === ba); // false as stict checking
console.log(ab !== ba); // true as stict checking
// 4. logical operator (||,&&)
console.log(m!=o || m>=o);
console.log(m!=o && m>=o);
// 5. conditional op (if,if else,else if , switch , nested)
var age = 19 ;
if (age>=18) {
    if (age==18) console.log("eligible next year");
    else console.log("eligible");
} 
else console.log("not eligible");
var q = 10 , g = 13 ;
if (q>g) console.log("q is greater");
else if (q<g) console.log("g is greater");
else console.log("both equal");
switch (q) {
    case 1:
        console.log("hi");
        break;
    case 2:
        console.log("bye");
        break;
    case 10:
        console.log("hello");
        break;
    default:
        console.log(q);
}
// 6. loop (for,while,do while)
var number1 = 0 ;
for (let i = 0; i <= 10 ; i++) {
    number1 += i ;
    console.log("number1 is :" + number1);
}
while (number1>50) {
    number1 -= 1 ;
    console.log("number1 is :" + number1);
}
do {
    console.log("number1 is :" + number1);
} while (number1>51);

// backticks
for (let j = 1; j < 11; j++) {
    const element = `2 x ${j} = ${2*j}`;
    console.log(element);
}

// functions (normal,arrow,anonymous)
// normal
// eg 1
function add(a,b) {
    return a+b ;
}
console.log(add(2,3));
// eg 2
function name() {
    console.log("hello");
}
name();
name();
// anonymous
// eg 1
let add1 = function(a,b) {
    return a+b ;
}
console.log(add1(2,3));
// eg 2 (self/immediate invoking)
(function(a,b) {
    console.log(add1(2,3));
})(2,3);
// arrow
// eg 1
let add2 = (a,b) => a+b ;  // cant use return in single line
console.log(add2(2,3));

// arrays
let arr = [true,2,3,'c',"shivam"];    // can store any type of data
arr.push("goel"); // add element at end
arr.unshift("hello"); // add element at start
arr.splice(2,0,"bye"); // add element at specific index
arr.splice(3,1,"hi"); // add element at specific index and remove 1 element
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr.length);
let arr1 = [1,2,3,4,5];
// array traversal 
// 1. for loop
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}
// 2. forEach loop
arr1.forEach((value,index,array) => {
    console.log(value + " " + index + " " + array);
});

// array inbuilt methods
let arr3 = [3,6,1,2,8,6,1,2,3,3,4,5];
let arr4 = [6,7,8,9,10];
console.log(arr3.concat(arr4)); // concat two arrays 
console.log(arr3.join('a ')); // join array elements with space
console.log(arr3.slice(1,3)); // slice array elements from 1 to 3
console.log(arr3.indexOf(3)); // find index of element
console.log(arr3.lastIndexOf(3)); // find last index of element
console.log(arr3.includes(3)); // check element present or not
console.log(arr3.reverse()); // reverse array
console.log(arr3.sort()); // sort array
console.log(arr3.pop()); // remove last element
console.log(arr3.shift()); // remove first element
console.log(arr3.toString()); // convert array to string
console.log(typeof arr3.toString());
console.log(typeof arr3);

// array methods
// 1. map
let arr2 = arr1.map((value) => value*2);
console.log(arr2);
// 2. filter
let arr5 = arr1.filter((value) => value>2);
console.log(arr5);
// 3. split 
let str = "hello,world,how,are,you";
let str1 = str.split(','); // split string with ,
(str1.forEach((value) => {
    console.log(value);
}));
console.log(str1);
let str2 = str1.join(','); // join array elements with space
console.log(str2);
