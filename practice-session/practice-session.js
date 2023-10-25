/* 
Practice session
Project:
Open index.html with Live Server. There are 2 statements.
When the user clicks a button, use JavaScript to add a comment that says "Correct!"" or "Incorrect!"

Exercise 1 - First question
1. Examine the HTML so you can determine which tag to select, and add a unigue id to it. Use the DOM to select it.
2. Create a function for a true answer and a function for a false answer. 
Inside each function, show a comment that says either "Correct!" or "Incorrect!"
3. Call the functions using an event attribute in index.html */

/* answer 1 */

let answerOneFalseTag = document.querySelector('#answer-1');
let answerOneFalseIcon = document.querySelector('#answer-1-true-icon');
function answerOneFalse() {
    answerOneFalseTag.textContent = "Incorrect!";
    answerOnefalseIcon.src = "thumbs-up.png";
}
let primary = document.querySelector('#answer-1-true-icon');
answerOneFalseIcon.addEventListener('click', answerOneFalse);


let answerOneTrueTag = document.querySelector('#answer-1');
let answerOneTrueIcon = document.querySelector('#answer-1-false-icon');
function answerOneTrue() {
    answerOneTrueTag.textContent = "Correct!";
    answerOneTrueIcon.src = "thumbs-up.png";
}
let contrast = document.querySelector('#answer-1-false-icon');
answerOneTrueIcon.addEventListener('click', answerOneTrue);

/* Answer 2 true or false */

let answerTwoTrueTag = document.querySelector('#answer-2');
let answerTwoTrueIcon = document.querySelector('#answer-2-true-icon');
function answerTwoTrue() {
    answerTwoTrueTag.textContent = "Correct!";
    answerTwoTrueIcon.src = "thumbs-up.png";
}
let primary2 = document.querySelector('#answer-2-true-icon');
answerTwoTrueIcon.addEventListener('click', answerTwoTrue);

let answerTwoFalseTag = document.querySelector('#answer-2');
let answerTwoFalseIcon = document.addEventListener('#answer-2-false-icon');
function answerTwoFalse() {
    answerTwoFalseTag.textContent = "Incorrect!";
    answerTwoFalseIcon.src = "thumbs-up.png";
}
let contrast2 = document.querySelector('#answer-2-false-icon');
answerTwoFalseIcon.addEventListener('click', answerTwoFalse);

/*Exercise 2 - Second question
This time, when a user clicks, next to the words Correct or Incorrect inside the comment, show the user an image, thumbs-up.png or thumbs-down.png
Look at the example screenshot to see what the output should look like.
Also, use the addEventListener method instead of an event attribute to call the functions.
1. Examine the HTML so you can determine which tags you need to select, and add a unigue id to them. 
Use the DOM to select them.
2. Create a function for a true answer and a function for a false answer. 
Inside the function, show a comment that says either "Correct!" or "Incorrect!" next to an image of either thumbs up or down. Add a class to the images and use CSS to size them so they look good.
3. Call the functions by adding an event listener to the buttons using the addEventListener() method.
____________
Hint 1 - Don't forget to to use the script tag to link to this file.
Hint 2 - Use variables to save yourself some repetitive typing.
*/






//Exercise 2