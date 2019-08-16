"use strict";

(function(){

    /**
     * Audience: "David, it sure seems like I can do a lot with JavaScript to my
     * web pages, but how can I make it so my user can activate the changes instead
     * of them happening on page load?"
     */

    // DOM Events allow us to add on an event model to our document, allowing interactivity.

    // Today, we'll be covering how to add an event listener, and how to remove it.

    // When using the addEventListener method, note the three parameters:
    // document.getElementById("someID").addEventListener("type", function(){}, useCapture);
    // type is the type of event in quotes. This can be "click", "mouseover", "keydown", and many others as seen at
    // https://developer.mozilla.org/en-US/docs/Web/Events
    // the function is a callback function. it's important to note that the passed argument is the function itself, not it's return.
    // Finally, the last parameter is useCapture.This will capture the event in the DOM tree if set to true, and won't when set to false.

    // document.getElementById("header").addEventListener("dblclick", function(){
    //     document.title = "DOM Events in JavaScript";
    //     this.innerText = "DOM Events, Actually";
    //     document.getElementById("jupiter").style.backgroundImage = "url('img/mars-coin.jpg')";
    //     document.getElementById("jupiter").addEventListener("mouseover", function(){
    //             this.style.backgroundImage = "url('img/mars.jpg')";
    //             this.addEventListener("mouseout", function(){
    //                 this.style.backgroundImage = "url('img/mars-coin.jpg')";
    //             }, false)
    //     }, false);
    // }, false);

    // keyup version

    document.addEventListener("keyup", function(event){
        // event.preventDefault();
        if (event.key === " ") {
            document.title = "DOM Events in JavaScript";
            document.getElementById("header").innerText = "DOM Events, Actually";
            document.getElementById("jupiter").style.backgroundImage = "url('img/mars-coin.jpg')";
            document.getElementById("jupiter").addEventListener("mouseover", function () {
                this.style.backgroundImage = "url('img/mars.jpg')";
                this.addEventListener("mouseout", function () {
                    this.style.backgroundImage = "url('img/mars-coin.jpg')";
                }, false)
            }, false);
        }
    }, false);

    // In the above example, i fixed the text in the HTML to represent the actually lesson we're learning today.

    // document.getElementById("change-a-tron").addEventListener("change", function() {
    //     document.getElementById("little-text").innerHTML = this.value;
    // });

    /**
     * Audience: "But David, as we've seen before, if we can create, can we not
     * also destroy? How could I remove an event listener?"
     */

    // To remove an event listener, We'd do so like this:

    var pikaEvent = function(){
        this.style.backgroundImage = 'url("img/screaming-detective-pikachu.gif")';
        this.style.backgroundColor = 'palevioletred';
        this.addEventListener("mouseout", function(){
            this.style.backgroundImage = 'url("img/dancing-pikachu.gif")';
            this.style.backgroundColor = 'goldenrod';
            this.removeEventListener('mouseover', pikaEvent, false);
        }, false);
    };

    // Notice I'm using a removeEventListener method, with this method, I am noting the event that I want to remove, and am passing the function that carries the changes done by the event as well. As before the final argument passed represents the capture of the event.

    // document.getElementById('little-text').addEventListener("click", function(){
    //     document.getElementById("little-text").innerHTML = "It is with much heart ache that I had to make this HTML. Originally I was attempting to change the HTML of the dot with an ID of 'jupiter' but I was having difficulty with the background-size property playing nice with me changing the background image. as such, I'm instead working this this example... <div id='special' class='circle'></div> As you can see we can add quite a bit of HTML.";
    //     document.getElementById("special").addEventListener("mouseover", pikaEvent, false);
    // }, false);

    // Notice now that I can only use the mouseover and mouse out events on the circle once. However, I can get it to restart the event by clicking on the paragraph tag again.

    // If I want to remove the click event and only have it happen once, I'll need to save the function to a variable and then add the event listener using the function definition.

    var littleEvent = function(){
        document.getElementById("little-text").innerHTML = "It is with much heart ache that I had to make this HTML. Originally I was attempting to change the HTML of the dot with an ID of 'jupiter' but I was having difficulty with the background-size property playing nice with me changing the background image. as such, I'm instead working this this example... <div id='special' class='circle'></div> As you can see we can add quite a bit of HTML.";
        document.getElementById("special").addEventListener("mouseover", pikaEvent, false);
        document.getElementById("little-text").removeEventListener("click", littleEvent, false);
    };

    document.getElementById("little-text").addEventListener("click", littleEvent, false);

    document.getElementById("change-a-tron").addEventListener("change", function() {
        document.getElementById("little-text").innerHTML = this.value;
        document.getElementById("little-text").addEventListener("click", littleEvent, false);
    });

})();