"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// ================== Version without functions

// var willContinue = confirm("Will you enter a number?");
//
//
// if (willContinue) {
//
//     // prompt the user for a number
//     var userInput = prompt("What number would you like to enter");
//
//
//     var isNum = !isNaN(userInput);
//
//     if (isNum) {
//
//         var userNum = parseFloat(userInput);
//
//         // alert the following...
//
//         // whether the number is even or odd
//
//         var isEven = userInput % 2 === 0;
//         var isEvenMessage = (isEven) ? "Number is even" : "Number is odd";
//         alert(isEvenMessage);
//
//         // what the number plus 100 is
//
//         alert(userNum + 100);
//
//         // if the number is negative or positive
//
//         var isPos = Math.sign(userNum) === 1;
//         var isPosMessage = (isPos) ? "Number is positive" : "Number is negative";
//         alert(isPosMessage);
//
//
//     } else {
//
//     // otherwise
//         // if what the user enters is not a number, use an alert to tell them that, and
//         // * do *not* display any of the above information.
//         alert("That's not a number!");
//     }
//
//
//
// }


// ================== Version with functions

    function isNum(input) {
        return !isNaN(input)
    }

    function isEven(num) {
        return num % 2 === 0;
    }

    function outputEvenOddMessage(result) {
        return (result) ? "Number is even" : "Number is odd";
    }

    function add100(num) {
        return num + 100;
    }

    function isPos(num) {
        return Math.sign(num) === 1;
    }

    function outputPosNegMessage(result) {
        return (result) ? "Number is positive" : "Number is negative";
    }

    function getNumDetails(number) {
        var userNum = parseFloat(number);

        // alert the following...

        // whether the number is even or odd

        var isEvenResult = isEven(userNum);

        alert(outputEvenOddMessage(isEvenResult));

        // what the number plus 100 is

        alert(add100(userNum));

        // if the number is negative or positive

        alert(outputPosNegMessage(isPos(userNum)));

    }

    function runProgram() {
        if (willContinue) {
            // prompt the user for a number
            var userInput = prompt("What number would you like to enter");
            if (isNum(userInput)) {
                getNumDetails(userInput);
            } else {
                // otherwise
                // if what the user enters is not a number, use an alert to tell them that, and
                // * do *not* display any of the above information.
                alert("That's not a number!");
            }
        }
    }

    var willContinue = confirm("Will you enter a number?");

    runProgram();





/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {
    var colorMsg = "";
    if (color === "blue") {
        colorMsg = "blue is awesome";
    } else if (color === "red") {
        colorMsg = "red is cool";
    } else if (color === "green") {
        colorMsg = "green is all right";
    } else {
        colorMsg = "I'm not sure about that color...";
    }
    return colorMsg;
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("yellow"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(randomColor);
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    var colorMsg = "";
    switch (color) {
        case "blue":
            colorMsg = "blue is awesome";
            break;
        case "red":
            colorMsg = "red is cool";
            break;
        case "green":
            colorMsg = "green is all right";
            break;
        default:
            colorMsg = "I'm not sure about that color...";
            return colorMsg;
    }
    return colorMsg;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Pick a color");
alert(analyzeColorSwitch(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, total) {
    var discountRate = 0;
    switch (luckyNum) {
        case 0:
            discountRate = 0;
            break;
        case 1:
            discountRate = .1;
            break;
        case 2:
            discountRate = .25;
            break;
        case 3:
            discountRate = .35;
            break;
        case 4:
            discountRate = .5;
            break;
        case 5:
            discountRate = 1;
    }

    return total - (total * discountRate);
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your total bill?");

console.log(luckyNumber);
alert("You total bill is: $" + calculateTotal(luckyNumber, totalBill).toFixed(2));