




// // let countdown = 5;
// // let timerStarted = false;
// // let bgcolor = 220;

// // function setup(){
// //     createCanvas(600,400)
// //     background(67,67)
// //     textAlign(CENTER,CENTER)
// // }

// //     interval = setInterval(updateCountdown, 1000)



// // function draw(){
// //     background(bscolor)
// //     text(countdown, width/2, height/2+20)
// //     if(!timerStarted){
// //         userStartAudio();
// //         timerStarted = true;
// //         interval = setInterval(updateCountdown, 1000);
// // }



// // let interval;
// // let bgcolor;


// // function updateCountdown(){
// //     if(countdown>0 { 
// //         Countdown-=1;
// //         bgcolor = color(random(255),random(255),random(255));
// //         console.log(countdown);
// //     }
// // )

// //     }
// // }

// let inputText;
// let userText = "Text here"

// function setup(){
//     createCanvas(600,400)

//     inputText = createInput();
//     inputText.position(200, height -80);
//     inputText.
// }





let inputText;
let userText;
let colorPicker;



function setup(){
    createCanvas(600,400);
    inputText


    colorPicker = createColorPicker("hsla(233, 100%, 50%, 1.00)");
    colorPicker.position(200, 32)
}

function draw() {
    background(colorPicker.value());

    fill(255)
    Rect(50,100,500,160,10);
    fill(0)
    textSize(16);
    textAlign(LEFT);
    text(userText,width/2,180)
    text(ageValue,width/2,220)

    text("Pick a big back grounders color", 20, 50);
    text("Name:", 100,height - 100);
    text("Age:", 100, height - 80);


    textSize(16);
    textAlign(LEFT);
    fill(0);


}

function updateText () {
    userText = this.value()
}

function updateAge () {
    userText
}








// // // six seven 6 7 6 7 mango mango MUSTARDDDD
// // //          🫴🫴