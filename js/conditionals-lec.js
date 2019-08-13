"use strict";

console.log("hello from conditionals lec.js!");

// ================ IF STATEMENT EXAMPLES ================

// var isRainy = true;
//
// if(isRainy){
//     //Show rainy icon
//     alert("It's raining today!");
// }


// var weather = "sunny";
//
// if(weather === "rainy"){
//     //Show rainy icon
//     alert("It's raining today!");
// }


// var numberOfLives = 0;
//
// if(numberOfLives === 0){
//     //game over
//     alert("Sorry, game over!");
// }



// =============== IF / ELSE STATEMENT ================

// var isRainy = true;

// if(isRainy){
//     //Show rainy icon
//     alert("It's raining today!");
// } else {
//     //Show generic weather icon
//     alert("Have a wonderful day!");
// }


// var currentWeather = "rainy";
// if(currentWeather === "rainy"){
//     // Show rainy icon
//     alert("The current weather is: raining!");
// } else {
//     //Show generic weather icon
//     alert("Have a wonderful day!");
// }


// var numberOfLives = 0;

// if(numberOfLives === 0){
// // game is over
//     alert("sorry game over!")
// }

// function checkIfGameIsOver(numberOfLives) {
//     if(numberOfLives === 0){
//         // game is over
//         alert("sorry game over!");
//         return "sorry game over";
//     } else {
//         // alert("Play on!");
//         return "play on!";
//     }
// }
//
// console.log(checkIfGameIsOver(0));
//

// ********************** SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


// ================ IF / ELSE IF / ELSE STATEMENT ===============


// ************** PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


// function intersectionDecision(lightColor){
//     if(lightColor === "green"){
//         return "Keep going";
//     } else if (lightColor === "yellow"){
//         return "Slow down";
//     } else if (lightColor == "red"){
//         return "Stop";
//     } else {
//         return "Proceed with caution.";
//     }
// }
// console.log(intersectionDecision("blinking"));


// function evaluateTrafficLight(lightColor){
//     if(lightColor === "green"){
//         return "Keep driving... go go go!";
//     } else if (lightColor === "yellow"){
//         return "Slow down";
//     } else if (lightColor === "red"){
//         return "Stop!";
//     } else {
//         return "Proceed with caution";
//     }
// }

// console.log(evaluateTrafficLight(userInput));


// ================ TERNARY STATEMENT ================

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)

// var weather = "sunny";
//
// var weatherMessage;
//
// if(weather === "rainy"){
//    weatherMessage = "It's raining! (from if/else)";
// } else {
//     weatherMessage = "Have a nice day! (from if/else)";
// }
//
// console.log(weatherMessage);


// var weather = "windy";
// var weatherMessage = (weather === "rainy") ? "It's raining from tern" : "Have a nice day from tern";
//
// console.log(weatherMessage)



// =============== SWITCH STATEMENT ================
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

// function intersectionDecision(lightColor){
//     switch (lightColor) {
//         case "green":
//             return "Keep going";
//         case "yellow":
//             return "Slow down";
//         case "red":
//             return "Stop";
//         default:
//             return "Proceed with caution";
//     }
// }
// console.log(intersectionDecision("yellow"));


// function intersectionDecision(lightColor){
//     var intersectionMessage;
//
//     switch (lightColor) {
//         case "green":
//             intersectionMessage = "Keep going";
//             break;
//         case "yellow":
//             intersectionMessage = "Slow down";
//             break;
//         case "red":
//             intersectionMessage = "Stop!!! ";
//             break;
//         default:
//             intersectionMessage =  "Proceed with caution";
//     }
//
//     return intersectionMessage;
// }
// console.log(intersectionDecision("red"));



// https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//Checkbox is clicked
//Checkbox clicked, set shoppingDone to True
// if(shoppingDone === true) {
//     set childsAllowance to 10;
// } else {
//     set childsAllowance to 5;
// }

// https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//user makes weather selection
// var choice = the value of the select

// if(choice === 'sunny') {
//     //Display sunny text
// } else if(choice === 'rainy') {
//     //display rainy text
// } else if(choice === 'snowing') {
//     //display snow text
// } else if(choice === 'overcast') {
//      //display overcast
// } else {
//      //display ""
// }

// https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//user selects theme
// (selectValue === 'black') ? updateToBlack() : updateToWhite();




