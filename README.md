# Training: DOM Events & jQuery

In this training, you'll practice with some of the most common DOM events in jQuery:

- ready
- submit
- change
- click
- keypress

The `.ready` method is specific to jQuery and uses a few native JavaScript event types internally. The other events listed are all native JavaScript events, and we recommend you use them with jQuery's `.on`.

You can find a full list of `event`-related methods in [jQuery's event documentation](http://api.jquery.com/category/events/). For a list of standard JavaScript events, check [MDN's event reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Instructions:

Fork this repository to your GitHub account, then clone your GitHub copy onto your computer.

* Each event has its own directory with HTML, CSS, and JavaScript files.  Start each event page by opening its HTML file in your browser.  
* Read the descriptions below (and the existing HTML and JavaScript) for each event page. To meet the goals, you'll need to change each `base.js` file. Do not change the HTML files.  
* Make sure to keep your developer console open so that you can check for bugs!  
* Make at least one git commit for each page.  

### `ready`

**Get the page to say "Go!" without touching the html.**

<img width="450" alt="ready screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17784989/b54a1bdc-6533-11e6-8ca6-abf9a892ff74.png">

<hr>

### `submit`


**Stop the forms from submitting.**

<img width="450" alt="submit" src="https://cloud.githubusercontent.com/assets/3254910/17784969/a63343c6-6533-11e6-977e-b3ac4779fe2c.png">


+ That's weird. Why does one button reload the same page and the other redirect to youtube?  

+ Hmm... What is the "?" doing in the URL? How did it get there? Try removing it.  

Stretch: Instead of just stopping the forms, make it so that clicking the submit buttons adds an embeds youtube video to the page.


<hr>


### `change`

<img width="450" alt="change solution screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17784718/57714ca2-6532-11e6-90ca-4c161c7aa6ff.png">

**Addition! Get the total to update whenever you update the numbers.**

Stretch: Add a "reset" button that clears all the inputs.



<hr>


### `click`


**Create a list of all the phrases that are clicked.**

<img width="450" alt="click screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17784947/847b6e66-6533-11e6-98db-0e893432ac16.png">


Stretch: In addition to listing the phrase I clicked, can you include a timestamp?



<hr>


### `keypress`

**Make a stop watch!**

<img width="450" alt="keypress screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17785026/e7f1ecfe-6533-11e6-922c-e0481692a1ad.png">

When the user hits spacebar, record their "start" time.

When they hit it again, record their "end" time.

Then, calculate the total time, and put it on the page.



<hr>


###Wrap it Up

Recommended: Can you link all the pages together? Create a `<nav>` element on every page, with links to all the other pages.



<hr>


### Deliverables

1. When you wrap up work, edit this README to include your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment. Push your updates to GitHub and add a link to the repo to the "My Work" section of your website!

1. Choose one of the event types we've looked at or another you'd like to try, and implement it on your website.
