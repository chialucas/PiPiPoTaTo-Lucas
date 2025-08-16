// write your codes here

let shapeColor ="blue";
let x1,y1,x2





function setup(){
    createCanvas(400,400)
    background(200);
}

function draw(){
    fill(shapeColor);
    ellipse(200,200,80,80)
}

function mousePressed(){
    shapeColor = color(random(255), random(255),random(255))
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255))
}



