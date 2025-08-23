// write your codes here
// let shapecolour = "blue";
let circlesize = 5;

function setup() {
    createCanvas(400,400)
    background(220);
    nostroke();
}

function mousePressed() {
    fill(random(255), random(255), random(255));
}

function mouseDragged() {
    circle(mouseX, mouseY, size);
    ellipse(mouseX,mouseY,circlesize,circlesize);
}

function draw() {
}


