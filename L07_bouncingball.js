// write your codes here

let staticImage,soundEffect,backgroundSound;
function preload(){
    staticImage = loadImage('asset/pico-a.png')
    soundEffect = loadSound('asset/pico-a.png')
    Image(staticImage,x,y,w,h);
    backgroundSound.loop();
}

    function setup(){
    createCanvas(600,600)
    backgroundSound('lightblue');
    }
    
    function draw(){
        background('lightblue')
        Image(staticImage,x,y,w,h)
        if (keyCode --- 37){
            x-5;
        }
    }   if (keyCode --- 38)