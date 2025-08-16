// write your codes here
let shapecolour = random
function setup(){
    createCanvas(400,400);
    background(200);
}

function draw(){
    fillshape(colour);
    elllipse(200,200,80,80);
}

function mousePressed(){
    shapecolour = "red"
}

function mouseReleased(){
    shapecolour = "blue"
}
