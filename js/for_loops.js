// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num*i));
    }
}

showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

for (var i = 1; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * 181) + 20;
    if (randomNum % 2 === 0){
        console.log(randomNum + " is even!");
    } else {
        console.log(randomNum + " is odd!");
    }
}

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// var x = 1;
//
// for (var j = 1; j <= 9; j++) {
//     console.log(j * x);
//     x += "1";
// }

for (var i = 1; i <= 9; i++)
{
    var num = "";
    for (var j = 0; j < i; j++)
    {
        (num = num + i);
    }
    console.log(num);
}

// for (var i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i));
// }

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var k = 100; k >= 5; k-=5) {
    console.log(k);
}

// for (var k = 100; k >= 5; k--) {
//     if (k % 5 === 0) {
//         console.log(k);
//     }
// }



