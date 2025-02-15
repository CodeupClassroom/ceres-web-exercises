/**
 * Hey David, what's a jQuery?
 */

// jQuery is a JavaScript library that we can use to write JS Code easier and faster. jQuery will allow us to access methods and properties to make writing larger, more powerful code quicker.

/**
 * How do I use jQuery?
 */

// Just like Bootstrap, we can't use jQuery out of no where. We'll need to include it from a script tag in our HTML.

// Note:
// Remember that code is read from top to bottom. As such it would be beneficial to include the script tag above any of our own code.

// We can source the script tag in one of two ways. We can use locally stored jQuery by downloading the jQuery to our computer, and linking it like our local JS files.

// <script src="/js/jquery.js"></script>

// We can also link to a CDN! The benefit to using the CDN? We don't have to host jQuery on our machine, and save the storage space. It is more likely that our site would go down than the CDN host.

// <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

// Note: Throughout the curriculum we'll be using version 2.2.4. of jQuery which isn't the newest version. As of August 20th 2019, that would be 3.4.1. It is important to remember to use this version with the curriculum as it is built with this version of jQuery.

// Now that we've added the script tag to our HTML, we can begin writing code!

// To make use of the jQuery library, we'll need to access the jQuery object. The jQuery object can be accessed by simply typing:

console.log(jQuery);

// Here I'm console logging the jQuery object so that we can see the object in the console.

// It is often more common, and faster to access the jQuery object by typing it's alias:

console.log($);

// Above I'm console logging the jQuery object again, this time by calling it through it's alias.

// To better understand aliases: Batman is still Bruce Wayne. So if I want to call Batman, I can do that by using the bat signal or Bruce's cell phone.

// While we're still getting introduced to jQuery, I want to park for a second on the IIFE that we used in vanilla JS.

// Without jQuery we wrote IIFE's like this:

// (function(){
//     var coolMessage = "Howdy Ceres, y'all are neat!";
//     console.log(coolMessage);
// })();

// In the IIFE, it protects the variable coolMessage from being accessible in the global scope. Using jQuery, we can write an IIFE like so!

$(document).ready(function() {

    var favColor = '#999';

    var coolerHeader = "Howdy, Ceres! Let's talk <a href='https://www.imdb.com/name/nm1621032/?ref_=nv_sr_1?ref_=nv_sr_1'>jQuery!</a>";
    $('#header').html(coolerHeader);
    $('.lorem').css('color', 'blue').css('border', '2px solid blue').css('font-size', '2em');
    $('main').css('border', '5px dashed red');
    $('#lorem').css('color', favColor);
    $('h1, #ipsum').css('color', '#ef0');
    $('*').css('background', "#ddd").html('David was Here.').css('color', 'brown').css('font-size', '5em');
});