// // // // // // // write your codes here
// // // // // // // let shapecolour = "blue";
// // // // // // let circlesize = 5;

// // // // // // function setup() {
// // // // // //     createCanvas(400,400)
// // // // // //     background(220);
// // // // // //     noStroke();
// // // // // // }

// // // // // // function mousePressed() {
// // // // // //     fill(random(255), random(255), random(255));
// // // // // // }

// // // // // // function mouseDragged() {
// // // // // //     circle(mouseX, mouseY, circlesize);
// // // // // //     ellipse(mouseX,mouseY,circlesize,circlesize);
// // // // // // }

// // // // // // function draw() {
// // // // // // }

// // // // // // // function setup(){
// // // // // // //     createCanvas(750,750)
// // // // // // //     background(200);
// // // // // // // }
// // // // // // // function draw(){
// // // // // // //     circle()
// // // // // // //     circle(300,300,300)
// // // // // // // }
// // // // // // // function draw() {
// // // // // // //     //circle(width/2, height/2, 100);
// // // // // // //     for(let i=0; i<5; i++) {
// // // // // // //         fill(0, i*50, 0);
// // // // // // //         circle(50 + i*50, 50 + i*50 ,50)
// // // // // // //     }
// // // // // // // }


// // // // // let rectSize = 50;

// // // // // function setup(){
// // // // //     createCanvas(600, 600)
// // // // // }

// // // // // function draw() {
// // // // //     background(220)
// // // // //     rect(width/2 - rectSize/2, height/2 - rectSize/2, rectSize, rectSize);
// // // // // }
// // // // // function keyPressed() {
// // // // //     rectSize = 100;
// // // // // }

// // // // // function keyReleased() {
// // // // //     rectSize =50;
// // // // // }



// // // // // let circleSize = random(10,70);
// // // // // let nocircles = 



// // // // let rectSize = 50

// // // // function setup() {
// // // //     createCanvas(400, 400)
// // // // }

// // // // function draw() {
// // // //     background(220)
// // // //     rect(width/2 - rectSize/2, height/2, rectSize/2, rectSize, rectSize);
// // // // }

// // // // function keyPressed(){
// // // //     rectSize = 100;
// // // // }


// // // // function keyReleased(){
// // // //     rectSize = 50;
// // // // }

// // // // console.log(1 !== 0)

// // // let showCircle = false;
// // // let showRect = false;
// // // let showTri = false;

// // // function setup() {
// // //     createCanvas(600,400);
// // //     if(showCircle){
// // //         circle(width/2, height/2, 100)
// // //     }
// // // }

// // // function draw(){
// // //     background(220);
// // //     if(showCircle){
// // //         circle(width/2, height/2, 100);
// // //     }
// // //     if(showRect){
// // //         rect(width /2 , height/2,100)
// // //     }
// // //     if(showTri){
// // //         Triangle(width /2,  )
// // //     }
// // // }
// // // function keyPressed(){
// // //     if (key === 'c'){
// // //         showCircle = !showCircle;
// // //     } 
// // //     if (key === 's'){
// // //         showRect =! showRect
// // //     }
// // //     if (key === 't'){
// // //         showTri =! showTri
// // //     }
// // // }




// // // function setup(){
// // //     createCanvas(600,400);
// // // }
// // // function draw() {
// // //     background(170)
// // //     if(key === 'c')
// // //         circle(width /2, height/2, 100);
// // //     if (key === 's'){
// // //         rect(width /2 - rectSize/2 , height/2 - rectSize/2, rectSize,rectSize);
// // // }
// // //     if (key === 't') {
// // //         triangle(60,60,90,90,100,120);
// // //     }
// // // }


// // function setup(){

// // }

// // function keyPressed(){
// //     console.log("key: ", key);
// //     console.log("keycode: ", keyCode);
// // }




// // let circleColour = 'red'
// // function setup(){
// //     createCanvas(600,600)
// // }

// // function draw(){
// //     circle(width/2, height/2, 100);
// //     if (keyCode === UP_ARROW){
// //         fill(255, 0, 0);
// //     }else if(keyCode === 40){
// //         fill(0,0,0);
// //      } else{
// //         fill(0, 169, 0);
// //     }
// // }

// // function keyPressed(){}

// function setup(){
//     createCanvas(600,600)
// }

// function draw(){
//     background(220);
//     if (keyCode === 87){
//         fill(255, 255, 255);
//     }   
//     else if (keyCode === 82){
//         fill(255,0,0);
//     }else if (keyCode === 71){
//         fill(0, 162, 0);
//     }else{
//        fill(255, 255, 0);
//     }
// }

// let x = 0;

// function setup() {
//     createCanvas(400,400);
// }

// function draw() {
//     background(220);
//     if (keyIsDown(RIGHT_ARROW)) {
//         x+= 1
//     }
//     circle(width /2 + x, height /2 , 100);
// }

// let x = 0;

// function setup() {
//     createCanvas(400,400);
// }

// function draw() {
//     background(220);
//     if (keyCode == RIGHT_ARROW) {
//         x += 1
//     }
//     circle(width / 2 + x, height / 2, 100);
// }

let x = 0;

function setup() {
    createCanvas(400, 400)
}

function draw(){
    background(220);
    circle(x)
}





