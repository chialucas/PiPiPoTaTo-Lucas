// write your codes here
let shapecolour = "blue";
let circlesize = 20;
function setup() {
    createcanvas(400,400)
    background(200);
    nostroke();
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


