function setup(){
    createCanvas(600,400)
    background(67,67)
}

    interval = setInterval(updateCountdown, 1000)



function draw(){
    
}


let countdown = 5;
let interval;
let bgcolor;


function updateCountdown(){
    if(!timerStarted){
        userStartAudio();
        timerStarted = true;
        interval = setInterval(updateCountdown, 1000);

    }
}



// six seven 6 7 6 7 mango mango MUSTARDDDD
//           🫴🫴