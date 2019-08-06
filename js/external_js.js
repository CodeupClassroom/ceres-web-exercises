"use strict";


// console.log("Hello from external JavaScript");
    //
    // alert("Welcome to my Website!");
    //
    //
    // var favColor = prompt("What is your favorite color?");
    //
    // alert("Great, " + favColor + " is my favorite color too!");
    //


// 3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//     Do not worry about the real operations to get the values, the goal of these exercises is
// to understand how real world conditions can be represented with code.
//
// // Movie Rental
//     You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

    //
    // var dailyRentalRateDollars = prompt("How much is the daily rental rate?");
    //
    // var littleMermaidDaysRented = prompt("How many days was the little mermaid rented?");
    // var brotherBearDaysRented = prompt("How many days was the brother bear rented?");
    // var herculesDaysRented = prompt("How many days was the hercules rented?");
    //
    // var totalRentalCost;
    //
    // totalRentalCost = (+littleMermaidDaysRented + +brotherBearDaysRented + +herculesDaysRented) * dailyRentalRateDollars;
    //
    // alert("The total cost is $" + totalRentalCost.toFixed(2));

// Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//     How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


    // var googleHourlyRateDollars = Number(prompt("What is your Google hourly wage rate?"));
    // var amazonHourlyRateDollars = Number(prompt("What is your Amazon hourly wage rate?"));
    // var facebookHourlyRateDollars = Number(prompt("What is your Facebook hourly wage rate?"));
    //
    // var googleHours = Number(prompt("How many hours were worked at Google?"));
    // var amazonHours = Number(prompt("How many hours were worked at Amazon?"));
    // var facebookHours = Number(prompt("How many hours were worked at Facebook?"));
    //
    // var totalPayment;
    //
    // totalPayment = googleHours * googleHourlyRateDollars;
    // totalPayment += amazonHours * amazonHourlyRateDollars;
    // totalPayment += facebookHours * facebookHourlyRateDollars;
    //
    // alert("Total earnings: $" + totalPayment.toFixed(2));


// Student Enrollment
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

    // var classIsNotFull = confirm("Class is not full:"); // boolean
    // var classScheduleDoesNotConflict = confirm("Schedules do not conflict:"); // boolean
    //
    // var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
    //
    // alert("Student enrolled: " + studentEnrolled);

// Product Offer
// A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:

    var numberOfItems = +prompt("How many items for checkout?"); // number
    var offerIsValid = confirm("Offer is valid:"); // boolean
    var isPremiumMember = confirm("Is premium member:"); // boolean

    var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

    alert("Product discount status: " + productDiscountApplied);