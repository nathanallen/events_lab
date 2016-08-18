console.log("Sanity Check: JS is working!");

var startTime; // undefined
var endTime; // undefined
var total; // undefined

$(document).ready(function(){

  $(window).on("keypress", function handleKeypress(event){

    if ( startTime ) {
      endTime = Date.now();
      total = (endTime - startTime) / 1000;
      $("#total-time").text( total + " seconds" )
    } else {
      startTime = Date.now();
    }

  })

})
