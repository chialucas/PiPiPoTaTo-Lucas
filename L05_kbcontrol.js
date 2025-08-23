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

function setup(){
    createCanvas(750,750)
    background(200);
}
function draw(){
    circle()
    circle(300,300,300)
}
function draw() {
    //circle(width/2, height/2, 100);
    for(let i=0; i<5; i++) {
        Fill(0, i*50, 0);

    }
}