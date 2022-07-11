/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 20;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/
let paletteColors = document.querySelectorAll(".palette .palette-color");
let brush = document.querySelector('.current-brush');
let canvasColor = document.querySelectorAll('.canvas div');

let app = document.querySelector('.app');
// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/
for (let i = 0; i < paletteColors.length; i++) {
  paletteColors[i].addEventListener('click', function () {
    console.log(paletteColors[i]);
    console.log(brush.classList)
    //parameter 1: color to replace: brush.classList[1]
    //parameter 2: new color: paletteColors[i].classList[1]
    //remove and add
    // brush.classList.remove(brush.classList[1])
    // brush.classList.add(paletteColors[i].classList[1]);
    brush.classList.replace(brush.classList[1], paletteColors[i].classList[1])
  })
}

brush.addEventListener('click', function () {
  console.log(brush);
})

// for (let i = 0; i < canvasColor.length; i++) {
//   canvasColor[i].addEventListener('click', function () {
//     console.log(canvasColor.classList)
//     canvasColor[i].classList.replace(canvasColor[i].classList[1], brush.classList[1])
//   })
// }

for(let square of canvasColor){
  // square.addEventListener('click', function (){
  //   square.classList.replace(square.classList[1], brush.classList[1])
  // })
square.addEventListener('mouseover', function(){
  if (mouseDown ===true){
    square.classList.replace(square.classList[1], brush.classList[1])
  }
})

}
// mousedown- The event occurs when the user presses a mouse button over an element
//document adds it to the entire page
let mouseDown = false;
app.addEventListener('mousedown', function (){
console.log("Mouse is down");
mouseDown = true;
console.log(`mousedown: ${mouseDown}`);
});


//mouseup- The event occurs when a user releases a mouse button over an element

app.addEventListener('mouseup', function (){
console.log("Mouse is up")
mouseDown = false;
console.log(`mousedown: ${mouseDown}`);
});


// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
