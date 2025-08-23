// // write your codes here
// // let shapecolour = "blue";
// let circlesize = 5;

// function setup() {
//     createCanvas(400,400)
//     background(220);
//     noStroke();
// }

// function mousePressed() {
//     fill(random(255), random(255), random(255));
// }

// function mouseDragged() {
//     circle(mouseX, mouseY, circlesize);
//     ellipse(mouseX,mouseY,circlesize,circlesize);
// }

// function draw() {
// }

// // function setup(){
// //     createCanvas(750,750)
// //     background(200);
// // }
// // function draw(){
// //     circle()
// //     circle(300,300,300)
// // }
// // function draw() {
// //     //circle(width/2, height/2, 100);
// //     for(let i=0; i<5; i++) {
// //         fill(0, i*50, 0);
// //         circle(50 + i*50, 50 + i*50 ,50)
// //     }
// // }


let rectSize = 50;

function setup(){
    createCanvas(600, 600)
}

function draw() {
    background(220)
    rectSize(width/2 - rectSize/2, height/2 - rectSize/2, rectSize, rectSize);
}
function keyPressed() {
    rectSize = 100;
}

function keyReleased() {
    rectSize =50;
}