// // function setup(){
// //     createCanvas(400,400);
// //     background(220);
// //     textSize(100);
// //     Text("hello I am lucas and i am 13.5690783 years in chinese years.")
// // }

// // let favouriteFoots = ["","", "","", ""];

// // for (let i = 0, u < favouriteFoots.length; i++) {
// //     console.log(favouriteFoots[i]);
// // }









// let favouriteFoots = ["waterbotel","bugger","suesheesh","Toecoes","poostasasa"]
// let yPos = 200;
// function setup(){
//     createCanvas(400,400);
//     background(220);
//     textSize(34);
//     textAlign(RIGHT, CENTER);
// }
// function draw(){
//     background(220);
//     //fill(0);
//     for(let i = 0, i<favouriteFoots.length; i++){
//         text((i +1)) + "." + favouriteFoots[1],300,(80+i*30) + yPos);
//     }
// }

let yPos;

let storyText = [
"A long time ago in a galaxy far,",
"far away...",
"",
"EPISODE I",
"THE BEGINNING",
"",
"It is a period of learning...",
"Students have begun their journey",
"into the world of p5.js.",
"With newfound powers, they",
"create amazing visuals and",
"animations...",
"",
"May the Code be with you!"
];
function setup(){
    createCanvas(600,600)
}

function draw() {
    background(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    push();
    translate(width/2, yPos);
    scale(1,3);
    for (let i = 0; i < storyText.length; i++){
        let sentence = storyText[i];

        text(sentence, width/2,i * lineGap );
    }
    yPos -= 0.6;

    console.log(yPos);
    if (yPos < -storyText.length * (lineGap+5)){
        yPos = height;
    }
}