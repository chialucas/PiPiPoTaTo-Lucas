// // let bounce = "bouncing!";
// // let bouncex = 200;

// // function setup(){
// //     createCanvas(600,600)
// //     bouncex = width;
// // }


// function setup(){
//     createCanvas(600,400)
//     textAlign(CENTER,CENTER)
// }
// function draw(){
//     background(400,600)
//     let h = hour();
//     let m = minute();
//     let s = second();


//     let StringTime = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2)
//     fill(0);
//     textSize(46);
//     text(StringTime, width/2 , height/2);
// }





let countdown = 5;
let interval;
let bgcolor;
let alarmSound;
let lastColorChange =0;
let lastSoundPlaying = 0;
let timerStarted = false;
function preload(){
    alarmSound = loadSound('assets/bossaNova.mp3');
}




function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
}

function draw(){
    background(600,400);

    let h = hour();
    let m = minute();
    let s = second();

    let stringTime = (h, 2) + ":" + nf(m,2) + ":" + nf(s,2);
    fill(0)
    textSize(46);










    text(stringTime, width/2, height/2 - 50);

    text(countdown, width/2 ,height/2 + 20);
}


function mousePressed(){
    if(!timerStarted){
        userStartAudio();
        timerStarted = true;
        interval = setInterval(updateCountdown, 1000);

    }



}




function updateCountdown(){
    if(countdown > 0){
        countdown-=1;
    }else{
        clearinterval(interval)
        if(!alarmActive){
            alarmActive = true
            alarmSound.play();
            lastSoundPlay = millis();
        }
    }
}


function keypressed(){
    if(keyCode == 32 && alarmActive){
        alarmActive = false;
        alarmSound.stop();
        bgColor = color(220);
    }
}