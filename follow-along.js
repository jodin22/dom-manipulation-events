const container = document.querySelector('#container'); // get a reference to the div id container that is already in our html
const content = document.createElement('div'); // create a new div and store it in variable content

content.classList.add('content'); // add a class to the variable content div
content.textContent = 'This is the glorious text-content!'; // add some text to the same variable content div

container.appendChild(content); // append the var content div to container

/*  
JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes
what the browser renders. the index file still only shows <div id="container"> and not the lines below the id container.
<!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"> // parent
  	<div class="content"> // first child. appendChild of future ones will appear below this child bc it appends to 
    the last child
      This is the glorious text-content!
    </div>
  </div>
</body>
*/

const newP = document.createElement('p'); // the new <p>
newP.classList.add('red'); // the new p has a class:  <p class = 'red'>
newP.style.cssText = 'color: red'; // the text color is red
newP.textContent = 'Hey, I\'m red!'; // the text content
container.appendChild(newP); // this will append the new p to the parent node as the last child. so the previous 
// appendChild will be above the new p. the previous child is the <div class = 'content> This is the glorious text.

const newH3 = document.createElement('h3'); // new <h3>
newH3.classList.add('blue'); // the h3 is now <h3 class = 'blue'>
newH3.style.cssText = 'color: blue'; // the text color is blue
newH3.textContent = 'I\'m a blue h3'; // the text content
container.appendChild(newH3); // append new h3 to the parent node as the last child. so the previous children will stay
// in place by the order they were appended. so it will be div class='content' is the first child. the second child is
// p class='red'. the third child is this h3.

const newDiv = document.createElement('div'); // a new <div>
newDiv.classList.add('black-pink'); // <div class = "black-pink">
newDiv.setAttribute('style', 'border-style: solid; border-color: black; background-color: pink');
// this gives a solid black border and a pink background. you must have border-style in there bc when you left it out
// no border appeared therefore no color would be applied to the border
const newH1 = document.createElement('h1'); // new <h1>
newH1.textContent = 'I\'m in a div'; // text content
const pDiv = document.createElement('p'); // new <p>
pDiv.textContent = 'ME TOO!'; // text content
newDiv.appendChild(newH1); // append h1 to the <div class = "black-pink"> instead of the <div id = 'container'>
newDiv.appendChild(pDiv); // append p to the <div class = "black-pink"> instead of the <div id = 'container'>
// so far with this ex, the <div id = 'container'> is a parent to all the other tags. and instead of appending 
// the new h1 and p to the original parent, it is appending them to a new parent which is the <div class = "black-pink">
container.appendChild(newDiv); // <div class = "black-pink"> is appended to the original parent of 
// <div id = 'container'>. 

/* so now we have <div id = 'container'> with 4 children. and one of these children is also a parent. that child is 
<div class = "black-pink">. and this child has 2 children inside it. And all of these children are inside the first 
tag <div id = 'container'>
*/

const btn = document.querySelector('#btn'); // get the reference to id = btn and put in a var
btn.onclick = () => alert('Hello World Again'); // use an arrow function to have the alert show. remember arrow functions are just a
// a shorthand way of declaring/using a function. instead of doing the traditional way of declaring a function like this: 
// function nameOfFunction (param, param) {the code you want to happen}, arrow functions will just have () =>.
// you can put param's inside the () and pass those to the arrow function. the stuff after the arow is the code you want to 
// happen. also arrow functions don't have a name unlike a regular function declaration which must have a name.

const btn2 = document.querySelector('#btn2'); // get the reference to id = btn2 and put in a var
btn2.addEventListener('click', () => { // this is an event listener. also it is an arrow function. notice after the =>
  alert('Hello World, I\'m back'); // the {} has the code for the function to do. and it looks like a regular function but there is no 
}); // name for the function. just a (). this means no params are passed to the function and all it does is 
// show the alert.

const btn3 = document.querySelector('#btn3'); // get the reference to id = btn3 and put in a var
btn3.onclick = alertFunction; // using onclick and it references a named function

const btn4 = document.querySelector('#btn4'); // get the reference to id = btn4 and put in a var
btn4.addEventListener('click', alertFunction); // using event listener and referencing a named function

function alertFunction() {  // the named function that is referenced in lines 75 to 79. also referenced in line 27 in the html file
  alert('YAY YOU DID IT!');
}

// this uses a callback from addEventListner
const callBack1 = document.querySelector('#callback1'); // get the reference to id = callback1 and put in a var
callBack1.addEventListener('click', function(e) { // function(e) is passing a param. this will show us more info about the event
  console.log(e); // the e in the function is an object that references the event. this object has useful properties and functions
}); // such as which mouse button or key was pressed. also info about the event's target - the DOM node that was clicked.


// this uses the same callback but limits to only get back the target. line 86 callback returned everything.
callBack1.addEventListener('click', function(e) {
  console.log(e.target);
});

// this uses the same callback but changes the background color of the button to blue
callBack1.addEventListener('click', function(e) {
  e.target.style.background = 'blue';
});

// Attaching listeners to groups of nodes
/* Using querySelectorAll('selector'), you can get a node list of all the items matching that selector. Then you can add a listener 
to each of the items by iterating through the node list. 

*/

// buttons is a node list. it looks and acts much like an array, but it is not a real array because it doesn't have all the array
// methods 
const buttons = document.querySelectorAll('button'); // get the reference for all button tags and put in a var

// use the forEach to iterate through each element of buttons
buttons.forEach((button) => { // each element in the buttons "array" is passed to the arrow function that has an
  button.addEventListener('click', () => { // event listener. each time a click happens, it will alert the button id using another
    alert(`Button id: ${button.id}`); // arrow function
  });
});

// lines 110 to 117 work for all buttons on your html doc from line 18 to the end. you will notice some of the alerts won't 
// show a button id bc not all button tags have the id attribute



