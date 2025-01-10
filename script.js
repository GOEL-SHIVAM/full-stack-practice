console.log(1 + 2);

// variables - var , let , const
const a = 5;
const b = 6;
console.log(a + b);

// implicit type
var num = "3" + 2;
console.log(num);
console.log(typeof num);
var num1 = "3" - 2;
console.log(num1);
console.log(typeof num1);
var num2 = "3" - true;
console.log(num2);
console.log(typeof num2);
var num3 = "3" - "hello";
console.log(num3);
console.log(typeof num3);

// explicit type conversion
var res = null;
res = Number(res);
console.log(res);
console.log(typeof res);
var res1 = true;
res1 = String(res1);
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
var n = 1;
console.log(n++);
console.log(n--);
console.log(++n);
console.log(--n);
// 3. comparision op (>,<,>=,<=,!=,==)
var m = 5,
  o = 6;
console.log(m == o);
console.log(m != o);
console.log(m > o);
console.log(m < o);
console.log(m >= o);
console.log(m <= o);
// == vs ===
var ab = "6";
var ba = 6;
console.log(ab == ba); // true
console.log(ab != ba); // false
console.log(ab === ba); // false as stict checking
console.log(ab !== ba); // true as stict checking
// 4. logical operator (||,&&)
console.log(m != o || m >= o);
console.log(m != o && m >= o);
// 5. conditional op (if,if else,else if , switch , nested)
var age = 19;
if (age >= 18) {
  if (age == 18) console.log("eligible next year");
  else console.log("eligible");
} else console.log("not eligible");
var q = 10,
  g = 13;
if (q > g) console.log("q is greater");
else if (q < g) console.log("g is greater");
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
var number1 = 0;
for (let i = 0; i <= 10; i++) {
  number1 += i;
  console.log("number1 is :" + number1);
}
while (number1 > 50) {
  number1 -= 1;
  console.log("number1 is :" + number1);
}
do {
  console.log("number1 is :" + number1);
} while (number1 > 51);

// backticks
for (let j = 1; j < 11; j++) {
  const element = `2 x ${j} = ${2 * j}`;
  console.log(element);
}

// functions (normal,arrow,anonymous)
// normal
// eg 1
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
// eg 2
function name() {
  console.log("hello");
}
name();
name();
// anonymous
// eg 1
let add1 = function (a, b) {
  return a + b;
};
console.log(add1(2, 3));
// eg 2 (self/immediate invoking)
(function (a, b) {
  console.log(add1(2, 3));
})(2, 3);
// arrow
// eg 1
let add2 = (a, b) => a + b; // cant use return in single line
console.log(add2(2, 3));

// arrays
let arr = [true, 2, 3, "c", "shivam"]; // can store any type of data
arr.push("goel"); // add element at end
arr.unshift("hello"); // add element at start
arr.splice(2, 0, "bye"); // add element at specific index
arr.splice(3, 1, "hi"); // add element at specific index and remove 1 element
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr.length);
let arr1 = [1, 2, 3, 4, 5];
// array traversal
// 1. for loop
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  console.log(element);
}
// 2. forEach loop
arr1.forEach((value, index, array) => {
  console.log(value + " " + index + " " + array);
});

// array inbuilt methods
let arr3 = [3, 6, 1, 2, 8, 6, 1, 2, 3, 3, 4, 5];
let arr4 = [6, 7, 8, 9, 10];
console.log(arr3.concat(arr4)); // concat two arrays
console.log(arr3.join("a ")); // join array elements with space
console.log(arr3.slice(1, 3)); // slice array elements from 1 to 3
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
let arr2 = arr1.map((value) => value * 2);
console.log(arr2);
// 2. filter
let arr5 = arr1.filter((value) => value > 2);
console.log(arr5);
// 3. split
let str = "hello,world,how,are,you";
let str1 = str.split(","); // split string with ,
str1.forEach((value) => {
  console.log(value);
});
console.log(str1);
let str2 = str1.join(" $ "); // join array elements with space
console.log(str2);

// map = used to iterate over array make changes to all elements and return new array
const arr6 = [1, 2, 3, 4, 5];
var mapExample = arr6.map((value, index, array) => {
  // value = element , index = index , array = array
  console.log(value * value + " " + index + " " + array);
  return value * value;
});
console.log(mapExample); // return new array

// forEach = used to iterate over array and perform some operation and give same array
var forEachExamople = arr6.forEach((value, index, array) => {
  // value = element , index = index , array = array
  var res = value * value;
  console.log(res + " " + index);
});
console.log(forEachExamople); // return undefined

let arr7 = [1, 2, 3, 4, 5];
// for in
for (const key in arr7) {
  console.log(arr7[key] + " " + key);
}
// for of
for (const iterator of arr7) {
  console.log(iterator + " " + arr7.indexOf(iterator));
}

// multidimensional array
//eg 1
let arr8 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr8);
console.log(arr8[0][0]);
for (let i = 0; i < arr8.length; i++) {
  for (let j = 0; j < arr8[i].length; j++) {
    console.log(arr8[i][j]);
  }
}
//eg 2
let arr9 = [
  ["shivam", 1],
  ["goel", 2],
  ["hello", 3],
];
console.log(arr9);
console.log(arr9[0][0]);
for (let i = 0; i < arr9.length; i++) {
  for (let j = 0; j < arr9[i].length; j++) {
    console.log(arr9[i][j]);
  }
}
// printing array elements using forEach
arr9.forEach((value, index, array) => {
  value.forEach((value1, index1, array1) => {
    console.log(value1);
  });
});
// printing array elements using for of
for (const iterator of arr9) {
  for (const iterator1 of iterator) {
    console.log(iterator1);
  }
}
// printing array elements using for in
for (const key in arr9) {
  for (const key1 in arr9[key]) {
    console.log(arr9[key][key1]);
  }
}

// copy of array into another array
// shallow copy
let arr10 = [1, 2, 3, 4, 5];
let arr11 = arr10; // shallow copy
console.log(arr10);
console.log(arr11);
arr10.push(6);
console.log(arr10); // both array will change
console.log(arr11); // both array will change
arr11.push(7);
console.log(arr10); // both array will change
console.log(arr11); // both array will change
// deep copy
// ... here is known as spread operator , it is used to copy array elements into another array
let arr12 = [...arr10]; // deep copy
console.log(arr10);
console.log(arr12);
arr10.push(8);
console.log(arr10); // only arr10 will change
console.log(arr12); // only arr10 will change
arr12.push(9);
console.log(arr10); // only arr12 will change
console.log(arr12); // only arr12 will change
// slice method
let arr13 = arr10.slice(0); // deep copy
console.log(arr10);
console.log(arr13);
arr10.push(10);
console.log(arr10); // only arr10 will change
console.log(arr13); // only arr10 will change
arr13.push(11);
console.log(arr10); // only arr13 will change
console.log(arr13); // only arr13 will change

// destructuring
let arr14 = [1, 2, 3, 4, 5];
let [a1, b1, ...c1] = arr14;
console.log(a1);
console.log(b1);
console.log(c1); // here ...c1 is used to store rest of the elements in array
console.log(c1[0]);

// objects
let obj = {
  name: "shivam",
  // last name : "goel", // cant use space in key
  "last name": "goel",
  age: 20,
  city: "surat",
  country: "india",
};
console.log(obj.name); // dot notation
console.log(obj["last name"]); // bracket notation , can use bot ' ' and " "
// function and array in object
let obj1 = {
  name: "shivam",
  age: 20,
  city: "surat",
  country: "india",
  print: function () {
    console.log("hello");
  },
  arr: [1, 2, 3, 4, 5],
};
obj1.print();
console.log(obj1.arr);
console.log(obj1.arr[3]);
console.log(obj1.arr[3] + " " + obj1.arr.indexOf(4));
console.log(obj1);
obj1.arr.push(6); // add element at end of array
console.log(obj1.arr);
obj1.key = "value"; // add key value pair in object
console.log(obj1);
let middle = "middle name";
obj1[middle] = "vinit"; // add key value pair in object
console.log(obj1);
for (const key in obj1) {
  // print key value pair
  console.log(key + " " + obj1[key]);
}
// object inbuilt methods
console.log(Object.keys(obj1)); // return keys of object
console.log(Object.values(obj1)); // return values of object
console.log(Object.entries(obj1)); // return key value pair of object
console.log(Object.assign(obj1)); // return copy of object
console.log(Object.assign({}, obj1)); // return copy of object
console.log(Object.assign({ "last Name": "goel" }, obj1)); // return copy of object with new key value pair
console.log(
  Object.assign({ "last Name": "goel" }, obj1, { "middle Name": "vinit" })
); // return copy of object with new key value pair

// destructuring in object
let obj2 = {
  name1: "shivam",
  age1: 20,
  city1: "surat",
  country1: "india",
};
let { name1, age1, ...cityCountry } = obj2;
console.log(name1);
console.log(age1);
console.log(cityCountry); // here ...cityCountry is used to store rest of the elements in object
console.log(cityCountry.city1);
console.log(cityCountry.country1);

// object in array
let arr15 = [
  {
    name: "shivam",
    age: 20,
    city: "surat",
    country: "india",
  },
  {
    name: "goel",
    age: 20,
    city: "surat",
    country: "india",
  },
];
console.log(arr15);
console.log(arr15[0]);
console.log(arr15[0].name);
for (const key in arr15) {
  console.log(arr15[key]);
}
for (const iterator of arr15) {
  console.log(iterator);
}

// destructuring in array of object
let arr16 = [
  {
    name: "shivam",
    age: 20,
    city: "surat",
    country: "india",
  },
  {
    name: "goel",
    age: 20,
    city: "surat",
    country: "india",
  },
];
let [{ name: name2, age: age2, ...rest }, ...rest1] = arr16;
console.log(name2);
console.log(age2);
console.log(rest);
console.log(rest1);
console.log(rest1[0].name);

// dom selectors
var domeg1 = document.getElementsByTagName("li");
console.log(domeg1);
var domeg2 = document.getElementsByClassName("hero");
console.log(domeg2);
var domeg3 = document.getElementById("names");
console.log(domeg3);
var domeg4 = document.querySelector(".hero"); // return first element
console.log(domeg4);
var domeg5 = document.querySelector("#names"); // so we can use both class and id selector
console.log(domeg5);
var domeg6 = document.querySelectorAll(".hero"); // return all elements
console.log(domeg6);

// DOM TRAVERSAL

// 1. parentElement - return parent element
var parent = document.querySelector("li");
var p = parent.parentElement;
console.log(p);

// 2. children -  return all children elements
var child = document.querySelector("ul");
var c = child.children;
console.log(c);

// 3. childNodes - return all children nodes which includes text nodes
var childNode = document.querySelector("ul");
var cn = childNode.children[0]; // return children nodes
var cn1 = childNode.childNodes; // return all children nodes
console.log(cn);
console.log(cn1);

// 4. siblings
console.log(document.querySelector(".hero").previousElementSibling); // return previous sibling element
console.log(
  document.querySelector(".hero").previousElementSibling.previousElementSibling
); // return 2nd previous sibling element
console.log(document.querySelector(".hero").nextElementSibling); // return next sibling element
console.log(
  document.querySelector(".hero").nextElementSibling.nextElementSibling
); // return 2nd next sibling element

var domeg7 = document.querySelector(".hero");
if (domeg7.previousElementSibling.previousElementSibling == null) {
  console.log("no 2nd previous sibling");
} else {
  console.log(domeg7.previousElementSibling.previousElementSibling);
}

var domeg8 = document.querySelectorAll(".hero");
domeg8.forEach((value) => {
  console.log(value.previousElementSibling.previousElementSibling);
});

// 5, appendChild - add element at end
// eg 1
var append = document.querySelector("ul"); // select ul element
var li = document.createElement("li"); // create element
li.textContent = "new element"; // add text to element
append.appendChild(li); // add element at end
// eg 2
var append1 = document.querySelector("ul"); // select ul element
var div = document.createElement("div"); // create element
div.textContent = "new element"; // add text to element
append1.appendChild(div); // add element at end

// 6. remove
// eg 1
// var remove = document.querySelector("ul"); // select ul element
// remove.remove() ; // remove element
// eg 2
var remove1 = document.querySelector("ul"); // select ul element
var remove2 = document.querySelector("li"); // select li element
remove1.removeChild(remove2); // remove shivam element

// 7. replace
// eg 1
var replace = document.querySelector("ul"); // select ul element
var li1 = document.createElement("li"); // create element
li1.textContent = "new element"; // add text to element
replace.replaceChild(li1, document.querySelector("li").nextElementSibling); // replace element
// eg 2
var replace1 = document.querySelector("ul"); // select ul element
var li2 = document.createElement("li"); // create element
li2.textContent = "new element"; // add text to element
replace1.replaceChild(li2, document.querySelector("li")); // replace element

// 8. parent node
// eg1
var parent1 = document.querySelector("li");
var p1 = parent1.parentNode;
console.log(p1);
// eg 2
var parent2 = document.querySelector("html");
var p2 = parent2.parentNode; // will never give null
console.log(p2);

// 9. previousSibling - return previous sibling node
var previousSibling = document.querySelector("li");
var ps = previousSibling.previousSibling;
console.log(ps); // return text node

// 10. nextSibling - return next sibling node
var nextSibling = document.querySelector("li");
var ns = nextSibling.nextSibling;
console.log(ns); // return text node

// 11. firstChild - return first child node
var firstChild = document.querySelector("ul");
var fc = firstChild.firstChild;
console.log(fc); // return text node

// 12. lastChild - return last child node
var lastChild = document.querySelector("ul");
var lc = lastChild.lastChild;
console.log(lc); // return text node

// 13. innerHTML - return inner html of element
var innerHTML = document.querySelector("li");
innerHTML.innerHTML += "<b> new element</b>"; // change inner html of element
console.log(innerHTML.innerHTML);

// 14. outerHTML - return outer html of element
var outerHTML = document.querySelector("li");
outerHTML.outerHTML = "<b>new element</b>"; // change outer html of element
console.log(outerHTML.outerHTML);
// so we can see that after using outerhtml element is removed as list(li) and got replaced by b tag
var child1 = document.querySelector("ul");
var c11 = child1.children;
console.log(c11);
// to get back as list we have to write it in li tag again
var outerHTML1 = document.querySelector("li");
outerHTML1.outerHTML = "<li><b>new element</b></li>"; // change outer html of element
console.log(outerHTML1.outerHTML);
var child1 = document.querySelector("ul");
var c11 = child1.children;
console.log(c11);

// 15. textContent - return text content of element
var textContent = document.querySelector("h2").textContent;
console.log(textContent); // will give all text irrespective of being displayed on screen or not

// 16. innerText - return inner text of element
var innerText = document.querySelector("h2").innerText;
console.log(innerText); // will give only text which is displayed on screen

// 17. insertAdjacentElement - add element at specific position
var insertAdjacentElement = document.querySelector(".shivam");
var newE = document.createElement("div");
newE.textContent = "new element of insertAdjacentElement ";
insertAdjacentElement.insertAdjacentElement("beforebegin", newE); // add element before element
insertAdjacentElement.insertAdjacentElement("afterbegin", newE); // add element at start of element
insertAdjacentElement.insertAdjacentElement("beforeend", newE); // add element at end of element
insertAdjacentElement.insertAdjacentElement("afterend", newE); // add element after element

// 18. insertAdjacentHTML - add html at specific position
var insertAdjacentHTML = document.querySelector(".shivam");
insertAdjacentHTML.insertAdjacentHTML(
  "beforebegin",
  "<div><b>new element</b></div>"
); // add html before element
insertAdjacentHTML.insertAdjacentHTML(
  "afterbegin",
  "<div><b>new element</b></div>"
); // add html at start of element
insertAdjacentHTML.insertAdjacentHTML(
  "beforeend",
  "<div><b>new element</b></div>"
); // add html at end of element
insertAdjacentHTML.insertAdjacentHTML(
  "afterend",
  "<div><b>new element</b></div>"
); // add html after element

19; // styling
document.body.style.backgroundColor = "red"; // change background color of body
document.body.style.color = "white"; // change color of body
document.body.style.fontSize = "20px"; // change font size of body
document.body.style.fontFamily = "Arial"; // change font family of body
document.body.style.padding = "20px"; // change padding of body
document.body.style.margin = "20px"; // change margin of body
document.body.style.border = "1px solid black"; // change border of body
document.body.style.textAlign = "center"; // change text align of body
document.body.style.display = "flex"; // change display of body
document.body.style.justifyContent = "center"; // change justify content of body
document.body.style.alignItems = "center"; // change align items of body
document.body.style.flexDirection = "column"; // change flex direction of body
document.body.style.flexWrap = "wrap"; // change flex wrap of body
document.body.style.flex = "1"; // change flex of body
document.body.style.order = "1"; // change order of body
document.body.style.flexGrow = "1"; // change flex grow of body
document.body.style.flexShrink = "1"; // change flex shrink of body
document.body.style.flexBasis = "100px"; // change flex basis of body
document.body.style.alignSelf = "center"; // change align self of body
document.body.style.position = "relative"; // change position of body
document.body.style.top = "50px"; // change top of body
document.body.style.left = "50px"; // change left of body
document.body.style.right = "50px"; // change right of body
document.body.style.bottom = "50px"; // change bottom of body

// 20. get and set attribute
let abc = document.querySelector("#abc");
console.log(abc.getAttribute("about")); // get about attribute
console.log(abc.getAttribute("class")); // get class attribute
abc.setAttribute("class", "shivam"); // set class attribute
console.log(abc.getAttribute("class")); // get class attribute
console.log(abc.outerHTML); // get outer html of element
for (const att of abc.attributes) {
  console.log(att.name + " " + att.value); // get all attributes of element
}

// js interview problems practice

console.log("hello world");

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

let add_func = (a, b) => {
  return a + b;
};
console.log(add_func(2, 3));

let area = (a, b) => {
  return a * b;
};
console.log(area(2, 3));

let strQues = "hello world";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(strQues));

function evenOdd(a) {
  if (a % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOdd(5));

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "leap year";
  } else {
    return "not leap year";
  }
}
console.log(leapYear(2020));

let sumAll = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(1, 5));

let car = {
  make: "audi",
  model: "A4",
  year: 2020,
};
car.startEngine = function () {
  return "engine started";
};
console.log(car.startEngine());
console.log(car);

let paraChange = document.getElementsByClassName("helooooooo");
paraChange.textContent = "hello world my name is shivam goel";

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

function getRandomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.random();
}

console.log(getRandomNumber(1, 10));

let arrEg = [1, 2, 3, 5, 1, 34, 6, 3, 4, 5];

function onlyEvenUsinfHigherOrder(arr) {
  return arr.filter((value) => value % 2 === 0);
}
console.log(onlyEvenUsinfHigherOrder(arrEg));

function doubleAllUsingHigherOrder(arr) {
  return arr.map((value) => value * 2);
}
console.log(doubleAllUsingHigherOrder(arrEg));
console.log(arrEg);

function largestUsingHigherOrder(arr) {
  return arr.reduce((acc, value) => {
    if (acc < value) {
      acc = value;
    }
    return acc;
  });
}
console.log(largestUsingHigherOrder(arrEg));

function removeDuplicateUsingHigherOrder(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
console.log(removeDuplicateUsingHigherOrder(arrEg));

function removeSpecificElementUsingHigherOrder(arr, ele) {
  return arr.filter((value) => value !== ele);
}
console.log(removeSpecificElementUsingHigherOrder(arrEg, 5));

function dateAndTime() {
  let date = new Date();
  return date;
}
console.log(dateAndTime());

function dateAndTimeInSpecificFormat() {
  let date = new Date();
  console.log(date.toLocaleString());

  return date.toDateString();
}
console.log(dateAndTimeInSpecificFormat());

// function errorAPIDataFetchTryCatch () {
//   try {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   } catch (error) {
//     console.log(error);
//   }
// }
// errorAPIDataFetchTryCatch();

// function errorAPIDataFetchAsyncAwait () {
//   async function fetchData() {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchData();
// }
// errorAPIDataFetchAsyncAwait();

function factorialRecursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursion(n - 1);
  }
}
console.log(factorialRecursion(5));

function fibbonaciRecursion(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibbonaciRecursion(n - 1) + fibbonaciRecursion(n - 2);
  }
}
console.log(fibbonaciRecursion(5));

function createCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function privateVariableClosure() { 
  let privateVariable = "private  variable";
  return function () {
    return privateVariable;
  };
}
let privateVariable = privateVariableClosure();
console.log(privateVariable());

function multipleAPIusingCallback(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => callback(data));
}
function callback(data) {
  console.log(data);
}
multipleAPIusingCallback(callback);

function multipleAPIusingPromise() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
multipleAPIusingPromise();

function multipleAPIusingAsyncAwait() {
  async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
  }
  fetchData();
}
multipleAPIusingAsyncAwait();

function multipleImagesUsingPromise() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i++) {
        let img = document.createElement("img");
        img.src = data[i].url;
        document.body.appendChild(img);
      }
    });
}
multipleImagesUsingPromise();