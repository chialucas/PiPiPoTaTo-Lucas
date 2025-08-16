let colourValue = 0;


function setup() {
    createCanvas(600, 400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  background(255)
  // circle(75,200,100);
  // circle(225,200,100);
  // circle(375,200,100);
  // circle(525,200,100);
  
  // Recap 1: Repeating Circles
  // let spacing = 120;
  // for( let i = 1 ; i< 5 ; i++){
  //   fill(colourValue);
  //   // fill(i*50);
  //   circle(50 + i*50,100,40);
  //   colourValue +=1;
  // }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop
// for(let i = 0 ; i < 5 ; i++){
//   if (i%2 === 0){
//     fill(255);
//   }else{
//     fill(0);
//   }
//   circle(100,100,100);
// }
  // Task 3: Row of Circles

  // Task 4: Grid of Circles

  let CircleDiameter = 30;
  let numOfCircles = 5;
  let totalwidth = CircleDiameter * numOfCircles;
  let startX = (width - totalwidth)/2 + CircleDiameter/2;
  let startY = (height -totalwidth)/2 + CircleDiameter/2; // x axis coordinates of 1st starting circle - a wise teacher
  for(let row = 0; row < numOfCircles; row++){
    let rowY = startY + (CircleDiameter * row);

    for(let i = 0; i < numOfCircles; i++){
    let x = startX + i * CircleDiameter;
    ellipse (x, rowY, CircleDiameter, CircleDiameter);
    // circle(x, height/2,CircleDiameter);
    
  }
}
}