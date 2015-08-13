# DOM Events & jQuery
In the following exercises you will play with five of the most common DOM `events` in jQuery:
- ready
- submit
- change
- click
- keypress

You can find a full list of `event` related methods in jQuery here: http://api.jquery.com/category/events/

## Exercises

**Instructions:**  
* For each exercise, start by opening the `index.html` file for that challenge in your browser. (You can do this from inside Sublime Text by right clicking inside the html file and selecting "Open in Browser").
* To solve the challenge, you'll need to change each `base.js` file.
* Make sure to open your Chrome Developer Console so that you can check for bugs!
* SOLUTIONS: Solutions are in the `solutions` branch.

###ready
- Open your console and look at the messages. Pay close attention to the line number on the right (`base.js:6`).
- **Challenge**: Can you get the page to say "Go!" (without touching the html)?

###submit
- Click the submit buttons and pay close attention to where it says, e.g. "Last refresh: 1439391832393", on the page.
- **Challenge**: Can you stop the forms from submitting?
    + Why does one button reload the page and the other redirect?
    + What is the "?" doing in the URL? Try removing it.
- Bonus: Instead of redirecting to youtube, let's embed the video in our page instead!
    +  When the user clicks "submit", dynamically insert the embed code into the page (on youtube, click "share" under the video, then click "embed" and copy the html). HINT: The embed code belongs in your javascript, not your html!

###change
- **Challenge**: Some simple addition! Can you get the total to update whenever you update the numbers?
- Bonus: Can you create a "reset" button that clears all the inputs?
- Stretch: Can you create a "log" or "receipt" of all calculations? (Hint: you might consider using an unordered list).

###click
- **Challenge**: Can you create a log the lists the phrases that you click?
- Stretch: New phrases.
    + Create a form that allows users to dynamically add phrases to the page.
        * Watch out that they still log when they're clicked!

###keypress
- **Challenge**: Stop watch. When the user hits spacebar, record their "start" time. When they  hit it again, record their "end" time. Then, calculate the total time, and put it on the page.
- Stretch goals:
    + If the user hits the spacebar a third time, the timer should start again.
    + Add a way for the user to reset the timer.
    + Display an actual timer/counter that updates every second.

###Wrap it up
- Recommended: Can you link all the pages together? Create a navbar at the top of every page, with links to all the other pages.
