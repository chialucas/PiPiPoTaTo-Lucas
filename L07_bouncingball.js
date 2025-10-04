// // // write your codes here

// // let staticImage,soundEffect,backgroundSound;
// // let x = 50;
// // let y = 50;
// // let w = 100;
// // let h = 100;
// // function preload(){
// //     staticImage = loadImage('asset/pico-a.png')
// //     soundEffect = loadSound('asset/pico-a.png')
// //     Image(staticImage,x,y,w,h);
// //     backgroundSound.loop();
// // }


// //     function setup(){
// //     createCanvas(600,600)
// //     backgroundSound('lightblue');
// //     }
    
// //     function draw(){
// //         background('lightblue');
// //         Image(staticImage,x,y,w,h);
// //         if (keyCode === 37){
// //             x-5;
// //         }
// //          if (keyCode === 38){
// //             y-5;
// //         }
// //         if (keyCode === 39){
// //             x+5;
// //         }
// //         if (keyCode === 40){
// //             y+5
// //         }
    
// //     }  

// //     function keyPressed(){
// //         if (keyCode === 32){
// //             // sound
// //             w = 50;
// //         }
// //     }
// //     function keyReleased(){
// //         w = 100;
// //     }

let ballX = 300;
let ballY = 200;
let ballSize = 5;
let ballspeedX = 20;
let ballspeedY = 20;

// function setup(){
//     createCanvas(600,400);
// }

// function draw(){
//     background(220);
//     circle(ballX,ballY,ballSize,ballSize);
    
//     ballX += ballspeedX
//     ballY = ballY + ballspeedY;

//     noStroke();
//     fill(349)
//     circle(ballX,ballY,ballSize);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function setup(){
    createCanvas(600,400);
    background(220);
}


function draw(){
    ballX += ballspeedX;
    ballY = ballY + ballspeedY;


    if(ballX - ballSize/2 <=0 || ballX + ballSize/2 >= width){
        ballspeedX = ballspeedX * -1;
        fill(random(255),random(255),random(255))
    }

    if(ballY -ballSize/2 <=0 || ballY + ballSize/2 >= height){
        ballspeedY *= -1; 
        fill(random(255),random(255),random(255)); 
    }

noStroke();
//  fill(349);
circle(ballX,ballY,ballSize);
}