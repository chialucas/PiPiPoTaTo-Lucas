// write your codes here

let shapeColor ="blue";
let x1,y1,x2, y2, x3, y3 




function setup(){
    createCanvas(400,400)
    background(200);
}
    
function draw(){
    fill(shapeColor);
    if(mouseIsPressed){
        triangle(x1,y1,x2,y2,x3,y3);
    }

}

function mousePressed(){
    shapeColor = color(random(255), random(255),random(255))
    x1= random(width);
    y1= random(height);

    x2= random(width);
    y2= random(height);

    x1= random(width);
    y1= random(height);


}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255))
}

// function mouseDragged(){
//     shapeColor = color(random(255), random(255),random(255))
//     fill(shapeColor);
//     circlesize = random(10,50)
//     ellipse(mouseX,mouseY,circlesize,circlesize)
// }


function mouseMoved(){
    circlesize +=2
}

