console.log("Sanity Check: JS is working!");

// track the most recent "start" time
var startTime; // undefined

// track the most recent "end" time
var endTime; // undefined

// a boolean to keep track of whether the timer is on or off
var counting = false;

// variable used for continuous time update while counting
var repeatDisplay;

// stores total time counted so far
var total = 0;

$(document).ready(function(){

  $(window).on("keypress", function handleKeypress(event){
    if (!counting){
      // we weren't counting,
      // so this click should start the timer...
      counting = true;
      // ... and record the start time...
      startTime = Date.now();
      // ... and start updating the display every 100 milliseconds
      repeatDisplay = setInterval(showCurrentTotal, 100);
    } else {
      // we were already counting,
      // so this click should stop the timer...
      counting = false;
      // ... and stop updating the display automatically...
      clearInterval(repeatDisplay);
      // ... and update and display the total
      endTime = (Date.now() - startTime)/1000;
      total = total + endTime;
      $("#total-time").text( total + " seconds" );
    }
  })

})

// callback function used with setInterval
// calculates and displays time so far
// WITHOUT updating total
function showCurrentTotal(){
  // calculate time since we last pressed start
  var elapsedTime = (Date.now() - startTime)/1000;
  // display the total time so far
  $("#total-time").text( (total + elapsedTime) + " seconds" );
}
