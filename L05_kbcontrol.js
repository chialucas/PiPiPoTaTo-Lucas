// write your codes here
let shapecolour = "blue";
let circlesize = 5;
function setup() {
    createCanvas(400,400)
    background(200);
    nostroke()
}

function MouseReleased() {
    shapecolour
    circlesize
}

function MouseDragged() {
    circlesize
    nostroke()
    ellipse(mouseX,mouseY,circlesize,circlesize);
}

function draw() {
    
}


