"use strict";

// exponentiation

// *** 1


// var x = Math.pow(4, 2);

// var x = 4 ** 2;
// console.log(x);



// let and const (block scope vs. function scope)


// {
//     var a = 10;
// }

// {
//     let b = 20;
// }
//
// console.log(b);



// const c = 30;
//
// c = 20;
//
// for (let i = 0; i < 10; i += 1) {
//
// }
//
// console.log(c);


// *** 2


// template strings

// "You had me at 'meat tornado'" - Ron Swanson

// let firstName = "Ron";
// let lastName = "Swanson";
//
// let quote = "";
// quote += '"You had me at \'meat tornado\'" - ';
// quote += firstName + " " + lastName;
//
// console.log(quote);


// *** 3

// function returnHello() {
//     return "hello";
// }
//
// const newQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;
// console.log(newQuote);
//
//
// let items = ['apple', 'grape', 'orange'];
//
// let itemsHtml = `
//     <ul>
//         <li>${items[0]}</li>
//         <li>${items[1]}</li>
//         <li>${items[2]}</li>
//     </ul>
// `;
//
// console.log(itemsHtml);

// for ..of loop (works on node lists!!!)

// *** 4

// const arr = ['one', 'two', 'three'];
//
// for (let str of arr) {
//     console.log(str);
// }

// const paras = document.getElementsByTagName('p');
//
// for (let para of paras) {
//     console.log(para);
//     console.log(i);
// }



// arrow functions

// function declaration

function addOne(arg1) {
    return arg1 + 1;
}

// original function expression

var addOneA = function(arg1) {
    return arg1 + 1;
};

// refactor to use arrow functions

const addOneB = (arg1) => {
    return arg1 + 1;
};

// removed curly braces (if only one statement)

const addOneC = (arg1) => arg1 + 1;


// removed parens if one input only

const addOneD = arg1 => arg1 + 1;

// console.log(addOne(2));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(2));
// console.log(addOneD(2));
//
//
// const sum = (arg1, arg2) => arg1 + arg2;
//
// console.log(sum(2, 2));
//


// SCOPE OF THIS
// const ob = {
//     arrow: () => {
//         console.log(this);
//     },
//     regular: function() {
//         console.log(this);
//     }
// };
//
//
//
// ob.arrow();
// ob.regular();

// const body = document.getElementsByTagName('body')[0];
//
// body.addEventListener("click", function(e) {
//     console.log(this);
// });


// default parameter values

// let addArgsA = (num1, num2) => {
//     if (num1 === undefined) {
//         num1 = 2;
//     }
//     if (num2 === undefined) {
//         num2 = 2;
//     }
//     return num1 + num2;
// };


// let addArgsB = (num1, num2) => {
//     num1 = num1 || 2;
//     num2 = num2 || 2;
//     return num1 + num2;
// };

// *** 5

// let addArgsC = function(num1 = 2, num2 = 2) {
//     return num1 + num2;
// };


// console.log("\nA output...");
// console.log(addArgsA());
// console.log(addArgsA(1));
// console.log(addArgsA(3, 3));
//
// console.log("\nB output...");
// console.log(addArgsB());
// console.log(addArgsB(1));
// console.log(addArgsB(3, 3));
//
// console.log("\nC output...");
// console.log(addArgsC());
// console.log(addArgsC(1));
// console.log(addArgsC(3, 3));


// object property variable assignment shorthand

const breed = "Pug";
const age = 3;
const name = "Lexie";
const isCute = true;


// *** 6

var dog = {
    breed: breed,
    age: age,
    name: name,
    isCute: isCute
};

const dog1 = {
    breed,
    age,
    name,
    isCute
};


dog1.breed = "dragon";


const arr = [1, 2, 3];

arr[2] = "bob";



// console.log(dog);
console.log(dog1);
console.log(arr);




// object / array destructuring

// let puppy = {
//     breed: "Lab",
//     age: 10,
//     name: "Sabrina",
//     isCute: true
// };
//

// *** 7


// console.log(breed);
// console.log(age);
// console.log(name);
// console.log(isCute);

// with arrays
// let cats = ["CJ", "Claude", "Max"];
//


// *** 8

// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


// using with functions

// const getArea = ({ height, width }) => height * width;

// let shape = {
//     height: 20,
//     width: 10
// };
//
// console.log(getArea(shape));

// or
// let height = 20;
// let width = 10;
//
// console.log(getArea({ height, width }));




