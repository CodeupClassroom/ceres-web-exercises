// We've seen how much easier it is to write html and styling changes in jQuery. But now let's take a look at mouse events.

// With Vanilla JS, this would be done like this:

document.getElementById('importanter-circle').addEventListener('click', function() {
    this.style = 'background-image: url(img/europa.webp); background-size: cover;';
});

// With jQuery, we can do it even easier!

$('#important-circle').click(function() {
    $(this).css('background-image','url(img/io.png)').css('background-size','cover');
});

// When we click on the smaller circle, the background image changes! Note that we can use the this keyword as well!

// $('h1').dblclick(function(){
//     $(this).html('The Bringer of Jollity')
// });

// $('.grandma').hover(function() {
//     $(this).css('background-image','url(img/jupiter-coin.webp)');
// }, function() {
//     $(this).css('background-image','url(img/jupiter.webp)');
// });