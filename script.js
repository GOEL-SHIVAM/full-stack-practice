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
var number = 0 ;
for (let i = 0; i <= 10 ; i++) {
    number += i ;
    console.log("number is :" + number);
}
number -= 1 ;
while (number>50) {
    console.log("number is :" + number);
}
do {
    console.log("number is :" + number);
} while (number>51);


