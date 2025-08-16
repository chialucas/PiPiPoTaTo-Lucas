// write your codes here
let shapecolour = random(0,255)
function setup(){
    createCanvas(400,400);
    background(200);
}

function draw(){
    fillshape(colour);
    ellipse(200,200,80,80);
}

function mousePressed(){
    shapecolour = colour(random(255),random(255),random(255))
}

function mouseReleased(){
    shapecolour = colour(random(255),random(255),random(255))
}
