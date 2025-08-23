// write your codes here
let shapecolour = "blue";
let circlesize = 5;

function setup() {
    createCanvas(400,400)
    background(220);
    nostroke();
}

function MousePressed() {
    fill(random(255), random(255), random(255));
}

function MouseDragged() {
    circle(mouseX, mouseY, size);
    nostroke();
    ellipse(mouseX,mouseY,circlesize,circlesize);
}

function draw() {
}


