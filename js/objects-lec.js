/**
 * "David, what's an object?"
 */

// An object in JavaScript is a data structure that groups not only data, but functionality.

// Vocabulary:
// - property: A value/variable associated with an object.
// - method: A function associated with an object.

/**
 * "How do I make an object?"
 */

// To instantiate an object, we can create a new instance of an object like so:

var person = new Object();
console.log(typeof person);

// We can also use object literal notation:

var otherPerson = {};
console.log(typeof otherPerson);

// Now that we've created two people, let's give them both names.
// -- To give an object a property there are two ways

person.name = "Adam";
otherPerson["name"] = "Eve";

console.log(person["name"]);
console.log(otherPerson.name);

// Both of these ways will allow us to access, assign and reassign the values of the property of our objects.

// We can also create an object with property's values assigned.

var thirdPerson = {
    name: "Darryl"
};

console.log(thirdPerson.name);

// Note: while we can use a valid string as a property or method name, it is best practice to use a valid JS identifier for property and method names.

/**
 * "Yo dude. I heard you like objects, so I put an object in your object!"
 */

// We have the ability to nest an object inside of an object. Let's give Darryl a heart.

thirdPerson.heart = {
    bloodType: "O-",
    pumpBlood: function(){
        return "Lub dub... Lub dub...";
    }
};

console.log(thirdPerson.heart.pumpBlood());

// In the above example, not only were we able to give our thirdPerson variable a new property, but we were able to give that property a property and method!

// Note on assigning method: Doesn't it look familiar?

var countToFive = function() {
    for(var i = 1; i <= 5; i++){
        console.log(i);
    }
    return "Done!"
};

countToFive();

// Looks a lot like function expression, huh? 👀

// Well, we've learned a lot about objects today, but I do have one last thing to show you... this...

thirdPerson.introduction = function() {
    console.log("Hello, my name is " + this.name + ". I have a blood type of " + this.heart.bloodType + " and I hope that we can be friends.");
};

thirdPerson.introduction();

// By using the this keyword, I'm able to access the object that the method or property is from and make reference to it when accessing another method or property.

thirdPerson.heart.transfusion = function(bloodType) {
    return bloodType === this.bloodType || bloodType === "O-" || this.bloodType === "O-";
};

console.log(thirdPerson.heart.transfusion("B+"));