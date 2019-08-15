/**
 * "Hey David, we've been using this math object a lot as if we know how it works. Soe how does it
 * actually work?"
 */

// As we saw with the object lecture, we saw that we could create an object by instantiating it
// with var obj = new Object(); With the Math object, when we want to use its methods and
// properties, we can reference the object without instantiating due to the fact that the methods
// and properties are static (unchanging).

// We've been using the Math.random() method a lot without sitting down to explain it in lecture, so let's talk about it.

// Math.random() will generate a number between 0 and 1.

/**
 * "Wait, but we've been able to get numbers WAY higher than 0 and 1."
 */

// True, and we've been doing that by using this:

var max = 100;
var min = 0;
var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(Math.floor(Math.random()));
console.log(randomInt);

// Math.floor() is used to round a number down to it's nearest whole number (integer). By
// multiplying the random number from Math.random() by the maximum minus the minimum. When we add
// the at the end of the equation, we're adding the minimum number we're looking for to what
// could potentially be zero.

/**
 * "Surely we can use other methods to round numbers."
 */

// Yeah, we can round.

console.log(Math.round(8.9));
console.log(Math.round(8.5));
console.log(Math.round(8.1));
console.log(Math.round(8.00000009));

// Math.round() will round to the nearest integer. This can mean we'll round up or down depending
// on the decimal value.

// We have a floor, so wouldn't it make sense that we have a ceiling?

console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.1));
console.log(Math.ceil(8.0000000));

// Math.ceil() will round up.

/**
 * "Okay, there has to be more to the Math object than rounding."
 */

// We can also use Math.pow() for exponents

console.log(Math.pow(4,2));
console.log(Math.pow(4,3));
console.log(Math.pow(4,4));
console.log(Math.pow(4,.5));

// We can also use the Math.sqrt() function to find the square root of a number

console.log(Math.sqrt(4));
console.log(Math.sqrt(16));
console.log(Math.round(Math.sqrt(Math.pow(20, 7))));

/**
 * "That's a lot of methods, but what about properties"
 */

// In math, there are a few constants that we use. The Math JS object also has some constants.

function volumeSphereRounded(radius) {
    return Math.round((4/3) * Math.PI * Math.pow(radius,3));
}

console.log(volumeSphereRounded(12));
//  console.log(Math);
// We can use the pi constant by using Math.PI (note that PI is in all caps).