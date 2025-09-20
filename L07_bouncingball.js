// // write your codes here

// let staticImage,soundEffect,backgroundSound;
// let x = 50;
// let y = 50;
// let w = 100;
// let h = 100;
// function preload(){
//     staticImage = loadImage('asset/pico-a.png')
//     soundEffect = loadSound('asset/pico-a.png')
//     Image(staticImage,x,y,w,h);
//     backgroundSound.loop();
// }


//     function setup(){
//     createCanvas(600,600)
//     backgroundSound('lightblue');
//     }
    
//     function draw(){
//         background('lightblue');
//         Image(staticImage,x,y,w,h);
//         if (keyCode === 37){
//             x-5;
//         }
//          if (keyCode === 38){
//             y-5;
//         }
//         if (keyCode === 39){
//             x+5;
//         }
//         if (keyCode === 40){
//             y+5
//         }
    
//     }  

//     function keyPressed(){
//         if (keyCode === 32){
//             // sound
//             w = 50;
//         }
//     }
//     function keyReleased(){
//         w = 100;
//     }

let ballX = 300;
let ballY = 200;
let ballSize = 30;
let ballspeedX = 2;
let ballspeedY = 2;

function setup(){
    createCanvas(600,400);
}

function draw(){
    circle(ballX,ballY,ballSize,ballspeedX,ballspeedY)
}