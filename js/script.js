// code for newer version of jQuery

// $("button").on("mouseenter", function(){
//     $(this).removeClass('makeRed').addClass('makeBlue');
// });
// $("button").on("mouseleave", function(){
//     $(this).removeClass('makeBlue').addClass('makeRed');
// });

// $(document).on("ready", function(){
//     $(".box").on("click", function(){
//         const classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1].css("background-color", "red"));
//     });

// });



// $(function() {
//     $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
//     	var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     });



// });

$(function() {
    $(".box").on("click", function() {
        /**
         * when we click on an element that has a box class, thise event will be fired.
         */

        const classNames = $(this).attr("class").split(" ");
        const boxClass = classNames[0];
        const className = classNames[1];
        if ($(this).css("background.color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $("." + className) .css("background-color", "#000");
        } else {
            // Else turn all elements with a box class black 
            // and then change the color of all elements with the same class name as the clicked element to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "rgb(255, 0, 0)");
        };


    });
})   